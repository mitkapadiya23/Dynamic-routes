import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Page {
  id: number;
  parent_id: number | null;
  slug: string;
  title: string;
  content: string;
  children?: Page[];
}

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.baseUrl}/pages`);
  }

  getPageBySlug(slug: string): Observable<Page> {
    return this.http.get<Page>(`${this.baseUrl}/pages/${slug}`);
  }

  createPage(page: any): Observable<Page> {
    return this.http.post<Page>(`${this.baseUrl}/pages`, page);
  }
}
