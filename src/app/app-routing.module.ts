import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FileUploadComponent} from './components/file-upload/file-upload.component'
const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  {path: 'sidebar', component:SidebarComponent },
  {path: 'file-upload', component:FileUploadComponent }
  
  // { path: 'dashboard', component: DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
