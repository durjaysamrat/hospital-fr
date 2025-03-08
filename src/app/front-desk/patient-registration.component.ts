import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  patient = { name: '', age: '', contact: '', medicalHistory: '' };
  patients: any[] = [];

  constructor(private patientService: PatientService) {}

  registerPatient() {
    this.patientService.addPatient(this.patient).subscribe(() => {
      this.loadPatients();
      this.patient = { name: '', age: '', contact: '', medicalHistory: '' };
    });
  }

  loadPatients() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    });
  }

  ngOnInit() {
    this.loadPatients();
  }
}
