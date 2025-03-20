import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],  // ✅ Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false; 

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  constructor(private router: Router) {} 
  onLogin()
  {
    console.log('You succesfully done with login');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    if (this.username && this.password.length >= 6) {
      console.log('Login Successful!');
      this.router.navigate(['/sidebar']);  // ✅ Redirect to "dashboard"
    } else {
      console.log('Invalid login credentials');
    }
  }
 
}
