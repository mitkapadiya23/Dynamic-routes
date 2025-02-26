import { Routes } from '@angular/router';
import { PageTreeComponent } from './components/page-tree/page-tree.component';
import { PageFormComponent } from './components/page-form/page-form.component';
import { PageDisplayComponent } from './components/page-display/page-display.component';

export const routes: Routes = [
  { path: '', component: PageTreeComponent },
  { path: 'add-page', component: PageFormComponent },

  // The catch-all dynamic route for nested pages.
  { path: '**', component: PageDisplayComponent },
];
