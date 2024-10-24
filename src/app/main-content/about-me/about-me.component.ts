import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}

/* window.addEventListener('resize', setDynamicImage);
window.addEventListener('load', setDynamicImage);

function setDynamicImage() {
    const imageElement = document.getElementById('dynamicImage') as HTMLImageElement;
            imageElement.src = 'assets/img/hero-background-new.png';
} */