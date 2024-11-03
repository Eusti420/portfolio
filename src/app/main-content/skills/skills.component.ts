import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1250,
      once: true     
   });
  }
}
