import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '', 
        component: MainContentComponent,
        data: { scrollPositionRestoration: 'enabled' } 
    },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 0]
      }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
