import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  constructor(private http: HttpClient) {}
  showMission() {
    return this.http.get(environment.baseURL);
  }
  getYears(launch: any, land: any, year: any) {
    return this.http.get(
      environment.baseURL +
        '&launch_success=' +
        launch +
        '&land_success=' +
        land +
        '&launch_year=' +
        year
    );
  }
  getlunch(launch: any) {
    return this.http.get(environment.baseURL + '&launch_success=' + launch);
  }
  getlunchAndLand(launch: any, land: any) {
    return this.http.get(
      environment.baseURL +
        '&launch_success=' +
        launch +
        '&land_success=' +
        land
    );
  }
}
