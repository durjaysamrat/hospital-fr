import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { AppointmentComponent } from './front-desk/appointment.component';
import { PatientRegistrationComponent } from './front-desk/patient-registration.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard.component';
import { DoctorAvailabilityComponent } from './doctor/doctor-availability.component';
import { BillingComponent } from './billing/billing.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home Page
  { path: 'login', component: LoginComponent }, // Login Page
  { path: 'register', component: RegisterComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'doctor-availability', component: DoctorAvailabilityComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
