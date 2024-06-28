import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'data-view-remote',
    loadChildren: () =>
      import('data-view-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'data-entry-remote',
    loadChildren: () =>
      import('data-entry-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    // component: NxWelcomeComponent,
    loadChildren: () =>
      import('data-view-remote/Routes').then((m) => m.remoteRoutes),
  },
];
