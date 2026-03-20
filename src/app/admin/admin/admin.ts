import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../model/auth.service';
@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  constructor(private auth: AuthService,
    private router: Router) { }

  logout() {
    this.auth.clear();
    this.router.navigateByUrl("/");
  }

}
