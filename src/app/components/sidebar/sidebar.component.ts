import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  searchQuery: string = '';
  companies = [
    { name: 'Solocon Capital', route: 'solocon-capital' },
    { name: '4Di Capital', route: '4di-capital' },
    { name: 'ESET', route: 'eset' },
    { name: 'CBMS', route: 'cbms' },
    { name: 'CIPCIF', route: 'cipcif' },
    { name: 'Inala Broadcast', route: 'inala-broadcast' }
  ];

  filteredCompanies = [...this.companies];

  filterCompanies() {
    this.filteredCompanies = this.companies.filter(company =>
      company.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
