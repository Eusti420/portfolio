import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  closeMenu() {
    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  currentLanguage = 'de';

  constructor(private translate: TranslateService) {
 
    this.translate.setDefaultLang('de');
    this.translate.use('de'); 
  }
  

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
