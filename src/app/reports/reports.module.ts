import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsService } from './reports.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ReportsService],
  exports: [ReportsComponent]
})
export class ReportsModule {}
