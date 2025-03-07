import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { BillingService } from './billing.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BillingComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [BillingService],
  exports: [BillingComponent]
})
export class BillingModule {}
