// src/app/services/navigation.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToSection(section: string) {
    return this.router.navigate(['/'], { fragment: section }).then(() => {
      setTimeout(() => {  // Kleine Verzögerung, um sicherzustellen, dass die Hauptseite geladen ist
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }
}
