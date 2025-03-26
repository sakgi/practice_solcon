import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Define child routes inside SidebarComponent
const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'sidebar', 
    component: SidebarComponent,
    children: [
      { path: 'file-upload', component: FileUploadComponent },  // Child Route
      { path: '', redirectTo: 'file-upload', pathMatch: 'full' }, // Default child
      {path:'navbar', component:NavbarComponent },
    ]
  },
  { path: '**', redirectTo: 'sidebar' } // Wildcard to Sidebar
];

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      FormsModule,
      CommonModule,
      HttpClientModule,
      MatSelectModule,
      MatOptionModule,
      MatIconModule,
      BrowserAnimationsModule,
      RouterModule.forRoot([]),
      ToastrModule.forRoot({
        timeOut: 3000,       // Toast disappears after 3 seconds
        positionClass: 'toast-top-right', // Position of the toast
        preventDuplicates: true, // Avoid duplicate toasts
      }),
    ),
    provideRouter(routes),
    UserService,
  ],
};
