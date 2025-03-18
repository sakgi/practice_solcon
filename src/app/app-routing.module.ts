import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';
import {AddUserComponent} from './components/users/users.component';
import {CompanyListComponent} from './components/dashnavbar/dashnavbar.component'
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  {path: 'add-user', component: AddUserComponent},
  {path:'dash-nav', component:CompanyListComponent },
  {path: 'sidebar', component:SidebarComponent },
  // { path: 'dashboard', component: DashboardComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      // { path: 'add-user', component: AddUserComponent },
      // { path: 'dash-nav', component: CompanyListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
