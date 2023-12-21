import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent{
  }



