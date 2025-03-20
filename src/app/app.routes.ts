import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'songs-book',
        pathMatch: 'full'
    },
    {
      path: 'songs-book-grid',
      loadComponent: () => import('./features/songs-book/songs-book.component').then((m) => m.SongsBookComponent),
    },
    {
      path: 'songs-book',
      loadComponent: () => import('./features/songs-book-grid/songs-book-grid.component').then((m) => m.SongsBookGridComponent),
    },
    {
      path: 'add-song',
      loadComponent: () => import('./features/add-song/add-song.component').then((m) => m.AddSongComponent),
    },
    {
      path: 'schedule',
      children: [
        {
          path: '',
          loadComponent: () => import('./features/schedule/schedule.component').then((m) => m.ScheduleComponent),
        },
        {
          path: 'add',
          loadComponent: () => import('./features/add-schedule-form/add-schedule-form.component').then((m) => m.AddScheduleFormComponent)
        }
      ]
    },
    // {
    //     path: '',
    //     component: DefaultLayoutComponent,
    //     data: {
    //       title: 'Home'
    //     },
    //     children: [
    //       {
    //         path: 'calendar',
    //         loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
    //       },
        //   {
        //     path: 'theme',
        //     loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'base',
        //     loadChildren: () => import('./views/base/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'buttons',
        //     loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'forms',
        //     loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'icons',
        //     loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'notifications',
        //     loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'widgets',
        //     loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'charts',
        //     loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
        //   },
        //   {
        //     path: 'pages',
        //     loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
    //     //   }
    //     ]
    //   },
    {
        path: 'calendar',
        loadComponent: () => import('./features/calendar/calendar.component').then(m => m.CalendarComponent),
        data: {
          title: 'Calendar'
        }
      },
];
