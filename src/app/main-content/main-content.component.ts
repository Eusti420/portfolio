import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule } from '@angular/router';
import { ImprintComponent } from '../imprint/imprint.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutMeComponent, 
    ContactComponent, 
    HeroComponent, 
    PortfolioComponent, 
    SkillsComponent,
    RouterModule,
    ImprintComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
