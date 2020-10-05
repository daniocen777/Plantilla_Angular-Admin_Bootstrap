import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages/page-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  /* 
    path: 'dashboard' => PagesRoutingModule
    path: 'dashboard/progress' => PagesRoutingModule
    path: 'dashboard/graphic1' => PagesRoutingModule
    path: 'login' => AuthRoutingModule
    path: 'register' => AuthRoutingModule
   */

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
