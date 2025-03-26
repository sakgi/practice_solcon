import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { ToastrService,ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ToastrModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router, private loginService: LoginService,private toaster: ToastrService) {}
 
  // Toggle Password Visibility
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Login Function
  onLogin() {
    if (!this.email || !this.password) {
      // Swal.fire('Error', 'Please fill in all fields.', 'error');
      this.toaster.error('Error', 'Please fill in all fields.')
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.toaster.error('Error', 'Please enter a valid email address.');
      return;
    }

    // Call the LoginService
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.error("✅ Login service called.");
        console.log("Server Response:", response);
        if (response && response.token) {
          this.toaster.success('Success', 'Login successful!');
          localStorage.setItem('token', response.token);
          this.router.navigate(['/sidebar']);
        } else {
          this.toaster.error('Error', 'Invalid email or password.');
        }
      },
      (error) => {
        this.toaster.error('Error', 'Server error. Please try again later.');
      }
    );
  }

  // Email Validation Function
  validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
