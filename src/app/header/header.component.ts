import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
// In deiner Component-Klasse:
export class HeaderComponent {
  closeMenu() {
    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
