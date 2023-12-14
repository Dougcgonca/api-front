import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../services/app.service';
import { User } from './app.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'api-front';
  dados: any;
  
  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAll(){
    this.userService.getAll().subscribe((data: UserService) => {
      this.dados = data;
      
  })
}
}
