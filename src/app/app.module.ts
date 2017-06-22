import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecurityAlertsComponent } from './security-alerts/security-alerts.component';
import { SecurityAlerts } from './services/security-alerts.service';
import { AppRoutingModule } from './app-routing.module';
import { ResultsAlertsComponent } from './results-alerts/results-alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    SecurityAlertsComponent,
    ResultsAlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SecurityAlerts],
  bootstrap: [AppComponent]
})
export class AppModule { }
