import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true, // Ensure standalone component
  imports: [CommonModule, FormsModule],  // Import CommonModule & FormsModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Dropdown Data
  companies: string[] = ['Google', 'Microsoft', 'Amazon', 'Apple', 'Tesla'];
  quarters: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  years: number[] = [];

  // Selected Values
  selectedCompany: string = "";
  selectedQuarter: string = "";
  selectedYear: string = "";
  uploadedFile: File | null = null;

  // Error Message
  errorMessage: string = "";

  constructor() {
    for (let i = 2020; i <= 2030; i++) {
      this.years.push(i);
    }
  }

  onFileSelected(event: any) {
    this.uploadedFile = event.target.files[0];

    if (this.uploadedFile) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf', 'docx', 'xlsx'];
      const fileName = this.uploadedFile.name;
      const fileExtension = fileName.split('.').pop()?.toLowerCase();

      if (!allowedExtensions.includes(fileExtension || '')) {
        this.errorMessage = "Video files are not allowed!";
        this.uploadedFile = null; // Reset file
      } else {
        this.errorMessage = "";
      }
    }
  }

  uploadFile() {
    if (!this.selectedCompany || !this.selectedQuarter || !this.selectedYear) {
      this.errorMessage = "Please select Company, Quarter, and Year before uploading.";
      return;
    }

    if (!this.uploadedFile) {
      this.errorMessage = "Please select a valid file.";
      return;
    }

    alert(`File '${this.uploadedFile.name}' uploaded successfully!`);
  }
}


