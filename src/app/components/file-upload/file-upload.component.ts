import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service';  // Import the shared service
import Swal from 'sweetalert2';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  imports: [CommonModule, FormsModule], 
})
export class FileUploadComponent {
  years: number[] = Array.from({ length: 11 }, (_, i) => 2015 + i);
  months: string[] = [];
  quarter: string = '';
  year: number | null = null;
  month: string = '';

  selectedCompany: string = 'Home';
  selectedFile: File | null = null;

  constructor(private sharedDataService: SharedDataService) {}

  quarterMonths: { [key: string]: string[] } = {
    Q1: ['January', 'February', 'March'],
    Q2: ['April', 'May', 'June'],
    Q3: ['July', 'August', 'September'],
    Q4: ['October', 'November', 'December']
  };

  ngOnInit(): void {
    this.sharedDataService.selectedCompany$.subscribe((company) => {
      this.selectedCompany = company;  // Listen for changes in the shared company value
    });
  }

  // Update months based on the selected quarter
  updateMonths() {
    if (!this.quarter) {
      this.months = [];
      this.month = '';
      return;
    }
    this.months = this.quarterMonths[this.quarter];
    this.month = '';
  }

  // Validate quarter selection before allowing month selection
  validateQuarter() {
    if (!this.quarter) {
      Swal.fire({
        icon: 'warning',
        title: 'Quarter Required',
        text: 'Please select a quarter before choosing a month.',
      });
      return false;
    }
    return true;
  }

  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      Swal.fire({
        icon: 'success',
        title: 'File Selected',
        text: `File: ${file.name} selected successfully.`,
      });
    }
  }

  // File upload handler
  uploadFile() {
    if (this.year && this.quarter && this.month && this.selectedFile) {
      if (this.selectedFile.type.startsWith('video/')) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid File Type',
          text: 'Video files are not accepted.',
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Uploaded File',
          text: `Uploaded: ${this.selectedFile.name}`,
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill all fields and select a valid file before uploading.',
      });
    }
  }

  // Clear form fields
  clearForm() {
    this.year = null;
    this.quarter = '';
    this.month = '';
    this.selectedFile = null;
    this.months = [];
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    Swal.fire({
      icon: 'info',
      title: 'Form Cleared',
      text: 'All fields have been reset.',
    });
  }
}