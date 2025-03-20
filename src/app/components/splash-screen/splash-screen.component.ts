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
  logoPath: string = '/assets/images/splash.jpg';
  isHidden = false; // Controls the fade-out effect

  constructor(private router: Router) {
    setTimeout(() => {
      this.isHidden = true; // Start fading out
      setTimeout(() => {
        this.router.navigate(['/login']); // Redirect after fade-out
      },800); // Wait for fade-out animation to complete
    }, 1000); // Initial animation duration
  }
}
