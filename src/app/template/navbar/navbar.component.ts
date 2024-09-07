import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    @ViewChild('menu') menu!: ElementRef;
    private offcanvas?: any;

    isMobileMenuOpen = false;
  
    constructor(private router: Router) {}
  
    openMenu() {}
    
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  
    navigateTo(route: string) {
      if (this.offcanvas) {
        this.offcanvas.hide();
      }
      this.router.navigate([route]);
    }

}
