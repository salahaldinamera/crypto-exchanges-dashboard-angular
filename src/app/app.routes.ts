import { Routes } from '@angular/router';
import {AuthGuard} from "@app/core/gaurd/authGuard";
import {FullScreenLayoutComponent} from "@app/layouts/full-screen/full-screen-layout.component";
import {MainLayoutComponent} from "@app/layouts/main/main-layout.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullScreenLayoutComponent,
    children: [
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
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('@pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'DASHBOARD',
        canActivate: [AuthGuard]
      },
      {
        path: 'trade',
        loadComponent: () => import('@pages/trade/trade.component').then(m => m.TradeComponent),
        title: 'TRADE',
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadComponent: () => import('@pages/settings/settings.component').then(m => m.SettingsComponent),
        title: 'SETTINGS',
        canActivate: [AuthGuard]
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
