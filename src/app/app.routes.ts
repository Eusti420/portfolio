import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { HeroComponent } from './main-content/hero/hero.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        useHash: true,
      }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
