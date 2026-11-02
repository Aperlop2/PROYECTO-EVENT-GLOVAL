import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'inicio',
    loadComponent: () => import ('./inicio/inicio.component').then (m => m.InicioComponent),
    data:{
      title: 'inicio'
    }
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.component').then(m => m. PerfilComponent),
    data:{
      title:'Perfil Page'
    }
  },
  {
    path: 'eventos-destacados',
    loadComponent: () => import('./perfil/eventos-destacados/eventos-destacados.component').then(m => m.EventosDestacadosComponent),
    data:{
      title:'Evenyos-destacados Page'
    }
  },
  {
    path: 'historial-eventos',
    loadComponent: () => import('./perfil/historial-eventos/historial-eventos.component').then(m => m.HistorialEventosComponent),
    data:{
      title:'Historial-eventos Page'
    }
  },
  {
    path: 'ubicacion',
    loadComponent: () => import('./perfil/ubicacion/ubicacion.component').then(m => m.UbicacionComponent),
    data:{
      title:'Ubicacion Page'
    }
  },

];
