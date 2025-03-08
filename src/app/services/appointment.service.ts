import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) {}

  getAppointments() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addAppointment(appointment: any) {
    return this.http.post(this.apiUrl, appointment);
  }

  cancelAppointment(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
