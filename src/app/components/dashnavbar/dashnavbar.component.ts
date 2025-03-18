import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';

// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
// import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-company-list',
  templateUrl: './dashnavbar.component.html',
  styleUrls: ['./dashnavbar.component.css'],
  standalone: true,
  imports: [MatSelectModule, MatOptionModule,MatSidenavModule,
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
})
export class CompanyListComponent {
  companyList = ['Solcon Capital', '4Di Capital Fund', 'ESET', 'CBMS', 'CIPCIF', 'Inala Broadcast', 'InQuba', 'Seacom', 'LifeQ'];
  docTypes = ['Report', 'Invoice', 'Contract'];
  years = ['2023', '2024', '2025'];
  quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

  selectedCompany = 'Solcon Capital';
  selectedDocType = '';
  selectedYear = '';
  selectedQuarter = '';

  selectCompany(company: string) {
    this.selectedCompany = company;
  }

  clearFilters() {
    this.selectedDocType = '';
    this.selectedYear = '';
    this.selectedQuarter = '';
  }
}
