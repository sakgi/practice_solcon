import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
})
export class NavbarComponent {
  faUser = faUserCircle; // Font Awesome Icon
  isDropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    console.log("Logged out!");
    this.isDropdownOpen = false;
     // Clear any session or token (if required)
     localStorage.clear();  // or sessionStorage.clear();
    
     // Redirect to Login Page
     this.router.navigate(['/']);
  }
}
