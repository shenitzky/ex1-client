import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityAlertsComponent } from './security-alerts/security-alerts.component';
import { ResultsAlertsComponent } from './results-alerts/results-alerts.component';




const appRoutes : Routes = [
    { path: '', redirectTo: '/allSecurityAlerts', pathMatch: 'full'},
    { path: 'ex1.html', redirectTo: '/allSecurityAlerts', pathMatch: 'full'},
    { path: 'allSecurityAlerts', component: SecurityAlertsComponent},
    { path: 'getUserById', component: ResultsAlertsComponent},
    { path: 'getAlertsDevicesNumberCross', component: ResultsAlertsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}