import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from '../guard/validar-token.guard';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: { roles: ['dashboard_access'], preload: true},
        canActivate:[ValidarTokenGuard],
        canLoad:[ValidarTokenGuard]
      },
      {
        path:'list',
        loadChildren: ()=>import('./list-user/list-user.module').then((m) => m.ListUserModule),
        canActivate:[ValidarTokenGuard],
        canLoad:[ValidarTokenGuard]

      },
      {
        path: "**",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
