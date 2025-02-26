import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { PageService } from '../../services/page.service';
import { map } from 'rxjs';

interface Page {
  id: number;
  parent_id: number | null;
  slug: string;
  title: string;
  content: string;
  children?: Page[];
  expanded?: boolean;
  path?: string;
}

@Component({
  selector: 'app-page-tree',
  imports: [CommonModule, RouterModule],
  templateUrl: './page-tree.component.html',
  styleUrl: './page-tree.component.scss',
})
export class PageTreeComponent implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);
  pageService = inject(PageService);

  history: { pages: Page[]; title: string }[] = [];
  currentPages: Page[] = [];
  currentTitle: string = 'Home';

  @Input() pages: any[] = [];

  constructor() {}

  ngOnInit() {
    if (!this.pages || this.pages.length === 0) {
      this.pageService
        .getPages()
        .pipe(
          map((pages) => {
            pages.forEach((page) => this.addPaths(page));
            return pages;
          })
        )
        .subscribe((data) => {
          this.pages = data;
        });
    } else {
      this.pages = this.pages;
    }
  }

  addPaths(page: Page, basePath: string = ''): void {
    page.expanded = true;
    const currentPath = basePath ? `${basePath}/${page.slug}` : `${page.slug}`;

    page.path = currentPath;

    if (page.children && page.children.length > 0) {
      page.children.forEach((child) => this.addPaths(child, currentPath));
    }
  }

  toggle(page: Page, event: Event): void {
    event.stopPropagation();
    page.expanded = !page.expanded;
  }
}
