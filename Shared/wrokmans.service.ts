import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WrokmansService {
  private apiUrl:string = "http://localhost:3000/reqFormData";
  constructor(private http:HttpClient) { }

  RequestFormData(data:any){
    console.log("in service");
    return this.http.post(this.apiUrl, data);

  }
}
