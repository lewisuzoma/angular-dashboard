import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '@app-pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];