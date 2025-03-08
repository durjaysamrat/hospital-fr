import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: any[] = [];
  newAppointment = { patientName: '', doctor: '', date: '', time: '' };

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  scheduleAppointment() {
    this.appointmentService.addAppointment(this.newAppointment).subscribe(() => {
      this.loadAppointments();
      this.newAppointment = { patientName: '', doctor: '', date: '', time: '' };
    });
  }

  cancelAppointment(id: number) {
    this.appointmentService.cancelAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }
}
