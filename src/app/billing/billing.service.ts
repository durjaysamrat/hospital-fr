import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = 'http://localhost:8080/api/billing';

  constructor(private http: HttpClient) {}

  getBills(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBill(bill: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bill);
  }
}
