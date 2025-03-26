import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarComponent } from '../navbar/navbar.component';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    FontAwesomeModule,
    MatExpansionModule,
    FormsModule,
    RouterModule,
    NavbarComponent 
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  @ViewChild('drawer1') drawer1!: MatSidenav;
  searchQuery: string = '';
  faUser = faUserCircle; // Font Awesome Icon
  isDropdownOpen = false;
  isDesktopView: boolean = true;
  showDropdown: boolean = false;
  isMobile: boolean = window.innerWidth <= 768; // Mobile if screen <= 768px

  constructor(private router: Router) {}

  // Combined onResize Function
  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;
    this.isMobile = width <= 768;
    this.isDesktopView = width > 768;

    if (!this.isMobile && this.drawer) {
      this.drawer.open(); // Keep sidebar open on desktop
    }
  }

  ngOnInit() {
    this.onResize(); // Check on component load
  }

  // Toggle Profile Dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    console.log("Logged out!");
    this.isDropdownOpen = false;
    localStorage.clear(); // Clear session or token
    this.router.navigate(['/']); // Redirect to login
  }

  companies = [
    { name: 'Solocon Capital', route: '/file-upload' },
    { name: '4Di Capital', route: '/file-upload' },
    { name: 'ESET', route: '/file-upload' },
    { name: 'CBMS', route: '/file-upload' },
    { name: 'CIPCIF', route: 'cipcif' },
    { name: 'Inala Broadcast', route: 'inala-broadcast' },
  ];

  filteredCompanies: any[] = this.companies;

  // Filter companies based on search input
  filterCompanies() {
    this.filteredCompanies = this.companies.filter((company) =>
      company.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Close sidebar on mobile after selection
  closeSidebar() {
    if (this.isMobile && this.drawer1) {
      this.drawer1.close();
    }
  }

  // Log when sidebar is closed
  sidebarClosed(): void {
    console.log('Sidebar closed');
  }
}
