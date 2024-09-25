import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    ElementRef,
    HostListener,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-page-prevencao',
    templateUrl: './page-prevencao.component.html',
    styleUrls: ['./page-prevencao.component.css'],
})
export class PagePrevencaoComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel') carousel!: ElementRef;
    currentIndex: number = 0;
    itemWidth: number = 450;

    videos: { url: SafeResourceUrl }[] = [];

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.videos = [
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/NWvkpEg1TN0'
                ),
            },
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/PxFSnK8EYLE'
                ),
            },
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/dQw4w9WgXcQ'
                ),
            },
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/MaucSdm7aUU'
                ),
            },
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/ywr1y2h1NQI'
                ),
            },
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/yn2Ii2kPoZo'
                ),
            },
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/KvAoTrVqarU'
                ),
            },
            {
                url: this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/ZKFGPtb8IPk'
                ),
            },
        ];
    }

    ngAfterViewInit(): void {
        this.updateCarousel();
        this.startAutoplay();
        this.adjustItemWidth();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.adjustItemWidth();
        this.updateCarousel();
    }

    adjustItemWidth() {
        const containerWidth = window.innerWidth;
        if (containerWidth < 768) {
            this.itemWidth = 350;
        } else if (containerWidth < 1024) {
            this.itemWidth = 400;
        } else {
            this.itemWidth = 450;
        }
    }

    scrollLeft() {
        this.currentIndex =
            (this.currentIndex - 1 + this.videos.length) % this.videos.length;
        this.updateCarousel();
    }

    scrollRight() {
        this.currentIndex = (this.currentIndex + 1) % this.videos.length;
        this.updateCarousel();
    }

    goToSlide(index: number) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    startAutoplay() {
        setInterval(() => {
            this.scrollRight();
        }, 8000);
    }

    updateCarousel() {
        const carouselElement = this.carousel.nativeElement;
        const itemWidth =
            carouselElement.querySelector('.carousel-item').clientWidth;
        const containerWidth = carouselElement.offsetWidth;
        let offset =
            containerWidth / 2 -
            itemWidth / 2 -
            this.currentIndex * (itemWidth + 20);

        if (window.innerWidth <= 768) {
            offset =
                containerWidth / 2 -
                itemWidth / 2 -
                this.currentIndex * (itemWidth + 20) +
                1020;
        }

        carouselElement.style.transform = `translateX(${offset}px)`;
    }
}
