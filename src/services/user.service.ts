import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { User } from "../app/app.model";
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
})
export class UserService{

    private url= environment.api

    
    constructor(private httpCliente: HttpClient){}


    public httpListTask$(): Observable<User[]>{
      return this.httpCliente.get<User[]>(this.url)
    }

    getAll(): Observable<User[]> {
        return this.httpCliente.get<User[]>(this.url);
      }
    
    getById(id: number): Observable<User>{
        return this.httpCliente.get<User>(`${this.url}/${id}` )
    }

    createUser(id: number): Observable<User>{
        
        return this.httpCliente.post<User>(this.url,`${this.httpCliente}/users`);
    }

    deleteUser(id: number): Observable<User> {
        return this.httpCliente.delete<User>(`${this.httpCliente}/users/${id}`);
      }

    updateUser(id: number): Observable<User> {
        return this.httpCliente.put<User>(this.url, `${this.httpCliente}/users/${id}`);
      }

}