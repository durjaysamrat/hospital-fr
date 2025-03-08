import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  doctorName = 'Dr. John Doe';
  appointments: any[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.doctorService.getDoctorAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  updateMedicalRecord(appointmentId: number, notes: string) {
    this.doctorService.updateMedicalRecord(appointmentId, notes).subscribe(() => {
      this.loadAppointments();
    });
  }
}
