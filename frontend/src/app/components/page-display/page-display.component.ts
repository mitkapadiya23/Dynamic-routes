import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-display',
  imports: [CommonModule],
  templateUrl: './page-display.component.html',
  styleUrl: './page-display.component.scss',
})
export class PageDisplayComponent implements OnInit {
  page: any;
  pageService = inject(PageService);
  router = inject(Router);

  ngOnInit(): void {
    let routeComponents = this.router.url.split('/');
    const slug = routeComponents[routeComponents.length - 1];
    this.pageService.getPageBySlug(slug).subscribe({
      next: (res) => {
        if (!res) {
          alert('page not fount');
        }
        this.page = res;
      },
      error: (err) => {
        alert('page not fount');
        console.error(err);
      },
    });
  }
}
