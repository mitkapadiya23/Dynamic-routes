import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-page-form',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './page-form.component.html',
  styleUrl: './page-form.component.scss',
})
export class PageFormComponent implements OnInit {
  constructor() {}

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  pageService = inject(PageService);
  allPages: any[] = [];

  pageForm = this.fb.group({
    parent_id: [null],
    slug: ['', Validators.required],
    title: ['', Validators.required],
    content: [''],
  });

  ngOnInit(): void {
    this.pageService.getPages().subscribe((data) => {
      if (data) {
        this.allPages = this.getPageList(data);
      }
    });
  }

  onSubmit() {
    if (this.pageForm.valid) {
      this.pageService.createPage(this.pageForm.value).subscribe({
        next: (response) => {
          console.log('Page created', response);
          this.pageForm.reset();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error creating page', error);
        },
      });
    }
  }

  getPageList(pages: any) {
    if (pages) {
      pages.forEach((page: any) => {
        if (page.children) {
          this.getPageList(page.children);
        }
        this.allPages.push(page);
      });
    }
    return this.allPages;
  }
}
