import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8080/api/patients';

  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPatient(patient: any) {
    return this.http.post(this.apiUrl, patient);
  }
}
