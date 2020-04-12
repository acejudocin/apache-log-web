import { Component, OnInit } from '@angular/core';
import { ApiApacheStatsService } from './api-apache-stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  browserData: any;
  dataLoaded: boolean;
  generalInfo = new Object();

  constructor(private apacheStatsService: ApiApacheStatsService) { }

  async ngOnInit() {
    await this.apacheStatsService.getBrowserStats().toPromise().then(
      data => {
        this.browserData = data;
        this.dataLoaded = true;
      }
    );

    await this.apacheStatsService.getGeneralInfo().toPromise().then(
      data => this.generalInfo = data,
      error => console.log(error)
    );
    
  }

}
