import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector:'app-add-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports :[CommonModule,FormsModule]
})
export class AddUserComponent {
  user = { username: '', email: '', password: '', role: '' };
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (!this.user.username || !this.user.email || !this.user.password || !this.user.role) {
      this.errorMessage = "All fields are required!";
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next: () => {
        alert('User added successfully!');
        this.router.navigate(['add-user']); // Redirect to home after adding user
      },
      error: (err) => {
        this.errorMessage = err.error.error || "Something went wrong!";
      }
    });
  }

  onCancel() {
    if (confirm('Are you sure you want to cancel?')) {
      this.router.navigate(['/add-user']);
    }
  }
}
