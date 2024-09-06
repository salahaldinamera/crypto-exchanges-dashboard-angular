import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('@pages/login/sign-in/sign-in.component').then(m => m.SignInComponent),
    title: 'LOGIN'
  },
  {
    path: 'sign-up',
    loadComponent: () => import('@pages/login/sign-up/sign-up.component').then(m => m.SignUpComponent),
    title: 'SIGN_UP'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('@pages/login/sign-up/sign-up.component').then(m => m.SignUpComponent),
    title: 'SIGN_UP'
  },
];
