// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
// import { LoginComponent } from './components/login/login.component';
// import { FormsModule } from '@angular/forms';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { AddUserComponent } from './components/users/users.component';
// import { UserService } from './services/user.service';
// export const appConfig: ApplicationConfig = {
//   providers: [
//     importProvidersFrom(FormsModule,CommonModule),  // ✅ Import FormsModule here
//     provideRouter([
//       { path: '', component: SplashScreenComponent },
//       { path: 'login', component: LoginComponent },
//       { path: 'dashboard', component: DashboardComponent },
//       { path: 'add-user', component: AddUserComponent },
//     ])
//   ]
// };



import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule
import { AddUserComponent } from './components/users/users.component';
import { UserService } from './services/user.service';
import {CompanyListComponent} from './components/dashnavbar/dashnavbar.component'
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {SidebarComponent} from './components/sidebar/sidebar.component'
import { MatIconModule } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule, CommonModule, HttpClientModule,MatSelectModule,
      MatOptionModule,MatIconModule), // ✅ Add HttpClientModule here
    provideRouter([
      { path: '', component: SplashScreenComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-user', component: AddUserComponent },
      {path:'dash-nav', component:CompanyListComponent },
      {path:'sidebar',component:SidebarComponent}
    ]),
    UserService, // ✅ Ensure UserService is provided
  ]
};
