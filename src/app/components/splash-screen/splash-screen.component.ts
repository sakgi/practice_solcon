import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
  logoPath: string = '/assets/images/splash.jpg'; // Correct path


  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/login']); 
      // Redirect to Login Screen
    }, 2000);
  }
}
