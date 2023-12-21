import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {
  userService = inject(UserService);

  public getTask = signal<null | Array<{
    id?: number,
    email: string,
    name: string
  }>>(null)

ngOnInit(): void {
  this.userService.httpListTask$().subscribe({
    next:(next) => {
      console.log(next)
      this.getTask.set(next)
      console.log(next) 
      
    },
    error:(error) => console.log(error),
    complete:() => console.log('complete')
  })
}}
