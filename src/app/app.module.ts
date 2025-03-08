import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { AppointmentComponent } from './front-desk/appointment.component';
import { PatientRegistrationComponent } from './front-desk/patient-registration.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard.component';
import { DoctorAvailabilityComponent } from './doctor/doctor-availability.component';
import { BillingComponent } from './billing/billing.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';

// Services
import { AuthService } from './services/auth.service';
import { AppointmentService } from './services/appointment.service';
import { PatientService } from './services/patient.service';
import { DoctorService } from './services/doctor.service';
import { BillingService } from './services/billing.service';
import { AdminService } from './services/admin.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AppointmentComponent,
    PatientRegistrationComponent,
    DoctorDashboardComponent,
    DoctorAvailabilityComponent,
    BillingComponent,
    AdminDashboardComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AppointmentService,
    PatientService,
    DoctorService,
    BillingService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
