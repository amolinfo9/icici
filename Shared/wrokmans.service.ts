import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WrokmansService {
  private apiUrl_requestForm_workmens:string = "http://localhost:3000/reqFormData";
  private apiUrl_workmens_Comp:string = "http://localhost:3000/Worksmens_policy";
  constructor(private http:HttpClient) { }

  // reuestFromData
  getRequestFormData(data:any){
    console.log("in service-- RequestForm");
    return this.http.post(this.apiUrl_requestForm_workmens, data);
  }

  // workmens-compensation-policy
  getWorkMens_Comp(data:any){
    console.log("is service--- Workmens_Comp");
    return this.http.post(this.apiUrl_workmens_Comp,data);
  }

}
