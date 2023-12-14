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

    getAll(): Observable<any>{
        return this.httpCliente.get(`${this.url}/:id` )

    }

}