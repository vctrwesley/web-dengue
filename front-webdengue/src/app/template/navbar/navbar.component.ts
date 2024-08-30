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
  
    constructor(private router: Router) {}
  
    
  
    navigateTo(route: string) {
      if (this.offcanvas) {
        this.offcanvas.hide();
      }
      this.router.navigate([route]);
    }

}
