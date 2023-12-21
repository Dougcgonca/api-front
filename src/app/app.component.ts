import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent],
  template: `<app-title></app-title>`

  ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-front';
}