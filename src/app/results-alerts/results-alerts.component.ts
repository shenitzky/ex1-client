import { Component, OnInit } from '@angular/core';
import { SecurityAlerts } from '../services/security-alerts.service';

@Component({
  selector: 'app-results-alerts',
  templateUrl: './results-alerts.component.html',
  styleUrls: ['./results-alerts.component.css']
})
export class ResultsAlertsComponent implements OnInit {

  constructor(private securityAlertsService: SecurityAlerts) { 
      console.log(securityAlertsService.alerts);
  }

  ngOnInit() {
  }

}
