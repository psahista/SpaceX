import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  missionDetails: any = [];
  years = [
    { value1: '2006', value2: '2007' },
    { value1: '2008', value2: '2009' },
    { value1: '2010', value2: '2011' },
    { value1: '2012', value2: '2013' },
    { value1: '2014', value2: '2015' },
    { value1: '2016', value2: '2017' },
    { value1: '2018', value2: '2019' },
    { value1: '2020', value2: '2021' },
  ];
  launch = true;
  land = true;
  constructor(private globalService: GlobalServiceService) {}

  ngOnInit() {
    this.getMission();
  }
  getMission() {
    this.globalService.showMission().subscribe(
      (res) => {
        this.missionDetails = res;
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  getYear(year) {
    this.globalService
      .getYears(this.launch, this.land, year)
      .subscribe((res) => {
        this.missionDetails = res;
        console.log(res);
      });
  }
  getSuccessfulLunch(launch: boolean) {
    this.globalService.getlunch(launch).subscribe((res) => {
      this.missionDetails = res;
    });
  }
  getSuccessfulLanding(landing: boolean) {
    this.globalService
      .getlunchAndLand(this.launch, landing)
      .subscribe((res) => {
        this.missionDetails = res;
      });
  }
}
