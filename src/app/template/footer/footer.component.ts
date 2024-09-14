import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    const width = window.innerWidth;
    const linksContainer = this.el.nativeElement.querySelector('.links-container');
    const social = this.el.nativeElement.querySelector('#social');
    const footerLogo = this.el.nativeElement.querySelector('.footer-logo');
    const footerMenu = this.el.nativeElement.querySelector('.footer-menu');

    if (width <= 768) {
      if (linksContainer && social && footerLogo) {
        linksContainer.insertBefore(social, linksContainer.firstChild);
        linksContainer.insertBefore(footerLogo, linksContainer.firstChild);
      }
    } else {
      if (linksContainer && social && footerLogo) {
        linksContainer.appendChild(social);
        footerMenu.insertBefore(footerLogo, footerMenu.firstChild);
      }
    }
  }
}