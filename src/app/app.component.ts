import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Check if user is logged in by checking localStorage
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Logout function
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
