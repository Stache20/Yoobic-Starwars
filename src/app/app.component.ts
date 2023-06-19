import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private menuController: MenuController,
    private authService: AuthService
  ) {}

  closeMenu() {
    this.menuController.close().catch((error) => {
      // Handle error while closing menu
    });
  }

  logout() {
    this.authService
      .logout()
      .then(() => {
        // Logout successful
        this.router.navigate(['/login']); // Navigate to login page
        this.closeMenu(); // Close the menu
      })
      .catch((error) => {
        // Handle error during logout
      });
  }
}
