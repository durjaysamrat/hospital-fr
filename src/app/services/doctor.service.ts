import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:8080/api/doctor';

  constructor(private http: HttpClient) {}

  // Fetch doctor's availability
  getAvailability(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/availability`);
  }

  // Set doctor's availability
  setAvailability(availability: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/availability`, availability);
  }

  // Existing methods
  getDoctorAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments`);
  }

  updateMedicalRecord(appointmentId: number, notes: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-medical-record/${appointmentId}`, { notes });
  }
}
