import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PieComponent } from './charts/pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiApacheStatsService } from './dashboard/api-apache-stats.service';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [ApiApacheStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
