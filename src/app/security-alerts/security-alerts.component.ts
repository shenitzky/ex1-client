import { Component, OnInit } from '@angular/core';
import { Response, Headers, RequestOptions} from '@angular/http';
import { Alert } from './alert.model';
import { SecurityAlerts } from '../services/security-alerts.service';


@Component({
  selector: 'app-security-alerts',
  templateUrl: './security-alerts.component.html',
  styleUrls: ['./security-alerts.component.css'],
})
export class SecurityAlertsComponent implements OnInit {

  userAlert: Alert;
  userId: string;

  logginAlerts: boolean;
  minDevNum: number;

  constructor(private securityAlertsService: SecurityAlerts) { 
    this.fetchAllAlerts();
  }

  ngOnInit() {
  }

  fetchAllAlerts(){
      this.securityAlertsService.getAllUsersAlerts();
  }

  getUserById(){
      this.securityAlertsService.getUserAlertsById(this.userId);
  }

  getAlertsDevicesNumberCross(){
    this.securityAlertsService.getAlertsDevicesNumberCross(this.logginAlerts, this.minDevNum);
  }
}
