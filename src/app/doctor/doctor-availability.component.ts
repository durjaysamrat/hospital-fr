import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.css']
})
export class DoctorAvailabilityComponent implements OnInit {
  doctorName = 'Dr. John Doe';
  availability = { date: '', startTime: '', endTime: '' };
  availabilityList: any[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadAvailability();
  }

  loadAvailability() {
    this.doctorService.getAvailability().subscribe((data) => {
      this.availabilityList = data;
    });
  }

  updateAvailability() {
    this.doctorService.setAvailability(this.availability).subscribe(() => {
      this.loadAvailability();
      this.availability = { date: '', startTime: '', endTime: '' };
    });
  }
}
