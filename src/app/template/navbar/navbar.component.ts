import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

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

    ngOnInit(): void {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    navigateToMaps() {
      this.router.navigate(['/usuario/page-contato'], { fragment: 'maps' });
    }

}
