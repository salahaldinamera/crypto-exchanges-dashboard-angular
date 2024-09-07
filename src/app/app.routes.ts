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
    loadComponent: () => import('@pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'DASHBOARD'
  },
  {
    path: 'trade',
    loadComponent: () => import('@pages/trade/trade.component').then(m => m.TradeComponent),
    title: 'TRADE'
  },
  {
    path: 'settings',
    loadComponent: () => import('@pages/settings/settings.component').then(m => m.SettingsComponent),
    title: 'SETTINGS'
  }
];
