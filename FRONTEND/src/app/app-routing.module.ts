import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './modules/auth/Guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path: '',
    component: HomepageComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((a) => a.AuthModule),
  },
  {
    path: 'admin', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
   
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((u) => u.UserModule),
    
  },
  {
    path:'',loadChildren:()=>import('./modules/shared/shared.module').then((s)=>s.SharedModule)

  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
