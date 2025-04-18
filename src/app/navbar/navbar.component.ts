import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuCollapsed = true;
  scrolled = false;
  isMenuOpen: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
