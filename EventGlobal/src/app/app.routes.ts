import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { authGuard } from './guards/auth.guard';
import { EventosDestacadosComponent } from './views/pages/perfil/eventos-destacados/eventos-destacados.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'inicio',
    loadComponent: () => import('./views/pages/inicio/inicio.component').then(m => m. InicioComponent),
    data:{
      title:'Inicio Page'
    }
  },
  {
    path: 'perfil',
    canActivate:[authGuard],
    loadComponent: () => import('./views/pages/perfil/perfil.component').then(m => m. PerfilComponent),
    data:{
      title:'Perfil Page'
    }
  },
  {
    path: 'eventos-destacados',
    canActivate: [authGuard],
    component: EventosDestacadosComponent,
    data: {
      title: 'Eventos Destacados'
    }
  },
  {
    path: 'historial-eventos',
    canActivate:[authGuard],
    loadComponent: () => import('./views/pages/perfil/historial-eventos/historial-eventos.component').then(m => m.HistorialEventosComponent),
    data:{
      title:'Historial-eventos Page'
    }
  },
  {
    path: 'ubicacion',
    canActivate:[authGuard],
    loadComponent: () => import('./views/pages/perfil/ubicacion/ubicacion.component').then(m => m.UbicacionComponent),
    data:{
      title:'Ubicacion Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];