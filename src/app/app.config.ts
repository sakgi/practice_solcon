import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule

import { UserService } from './services/user.service';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule, CommonModule, HttpClientModule,MatSelectModule,
      MatOptionModule,MatIconModule), // ✅ Add HttpClientModule here
    provideRouter([
      { path: '', component: SplashScreenComponent },
      { path: 'login', component: LoginComponent }
      
    ]),
    UserService, // ✅ Ensure UserService is provided
  ]
};
