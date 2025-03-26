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
    MatExpansionModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  @ViewChild('drawer1') drawer1!: MatSidenav;
  searchQuery: string = '';
 
  

  isMobile: boolean = window.innerWidth <= 768;  // Mobile if screen <= 768px

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
    if (this.isMobile) {
      this.drawer1.close();
    }
  }

  // Log when sidebar is closed
  sidebarClosed(): void {
    console.log('Sidebar closed');
  }
  

  // Responsive: Check screen size on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.drawer.open(); // Keep sidebar open on desktop
    }
  }
}