import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../services/navigation.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  currentLanguage: string;

  constructor(
    private translate: TranslateService, 
    private navigationService: NavigationService) {
    
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(this.currentLanguage); 

  }

  ngOnInit() {
    const browserLang = navigator.language.split('-')[0]; // 'de-DE' wird zu 'de'
    if (browserLang === 'de' || browserLang === 'en') {
      this.currentLanguage = browserLang;
      this.translate.use(browserLang);
      localStorage.setItem('selectedLanguage', browserLang);
    }
  }

  navigateTo(section: string) {
    this.navigationService.navigateToSection(section);
    this.closeMenu();
  }
  

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
  }

  closeMenu() {
    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
