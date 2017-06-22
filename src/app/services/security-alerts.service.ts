import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Alert } from '../security-alerts/alert.model';

const domainAdress = 'https://security-settings-ws.herokuapp.com';

@Injectable()
export class SecurityAlerts {

  alerts: Alert[] = [];

  constructor(private http: Http) { }

  getUserAlertsById(id){
      this.alerts = [];
      return this.http.get(domainAdress + '/getUserById/' + id)
      .subscribe(
      (res: Response) => {
        var alertsJson = res.json()[0];
        this.alerts[0] = new Alert(
          alertsJson._id,
          alertsJson.user_name,
          alertsJson.password,
          alertsJson.first_name,
          alertsJson.last_name,
          alertsJson.email,
          alertsJson.settings.login_alerts,
          alertsJson.settings.recognized_devices,
          alertsJson.settings.phone_to_aproove_password_change,
          alertsJson.settings.recognized_devices_length
        );
        console.log(this.alerts);
        return;
    });
  }

 getAllUsersAlerts() {
      this.alerts = [];
      return this.http.get(domainAdress + '/getAllUsers').subscribe(
      (res: Response) => {
        var alertsJson = res.json();
        for(var index in alertsJson){
            var alert = new Alert(
              alertsJson[index]._id,
              alertsJson[index].user_name,
              alertsJson[index].password,
              alertsJson[index].first_name,
              alertsJson[index].last_name,
              alertsJson[index].email,
              alertsJson[index].settings.login_alerts,
              alertsJson[index].settings.recognized_devices,
              alertsJson[index].settings.phone_to_aproove_password_change,
              alertsJson[index].settings.recognized_devices_length
            );
            this.alerts.push(alert);
        }
        console.log(this.alerts);
        return;
    });
 }

 getAlertsDevicesNumberCross(loginAlerts, minDevices) {
    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    var options = new RequestOptions({ headers: headers });

    var reqBody = 'login_alerts=' + loginAlerts + '&min_devices='+ minDevices;
    this.alerts = [];
    return this.http.post(domainAdress + '/getAlertsDevicesCrossUsers/', reqBody, options)
    .subscribe((res: Response) => {
        var alertsJson = res.json();
        console.log(alertsJson);
        for(var index in alertsJson){
            var alert = new Alert(
              alertsJson[index]._id,
              alertsJson[index].user_name,
              alertsJson[index].password,
              alertsJson[index].first_name,
              alertsJson[index].last_name,
              alertsJson[index].email,
              alertsJson[index].settings.login_alerts,
              alertsJson[index].settings.recognized_devices,
              alertsJson[index].settings.phone_to_aproove_password_change,
              alertsJson[index].settings.recognized_devices_length
            );
            this.alerts.push(alert);
        }
        console.log(this.alerts);
        return;
    });
 }
}