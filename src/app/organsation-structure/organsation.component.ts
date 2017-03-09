import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataServiceService } from '../data-service.service';

declare var google: any;
@Component({
  selector: 'app-organsation-structure',
  templateUrl: './organsation-structure.component.html',
  styleUrls: ['./organsation-structure.component.css']
})
export class OrgansationStructureComponent implements OnInit {
  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get('./app/data/orgchart.json').subscribe(
      res => {
        google.charts.load('current', { packages: ["orgchart"] });
        google.charts.setOnLoadCallback(() => {
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Name');
          data.addColumn('string', 'Manager');
          data.addColumn('string', 'ToolTip');

          // For each orgchart box, provide the name, manager, and tooltip to show.

          data.addRows(
            res.json()
          );
          // data.setProperty('style', 'border: none');
          // Create the chart.
          var chart = new google.visualization.OrgChart(document.getElementById('org_struct'));
          // Draw the chart, setting the allowHtml option to true for the tooltips.
          chart.draw(data, { allowHtml: true });
        });
      }
    )
  }
}

@Component({
  selector: 'app-admin-legal-details',
  templateUrl: './admin-legal-details.component.html',
  styleUrls: ['./admin-legal-details.component.css']
})
export class AdminLegalDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  templateUrl: './organ_profile.html'
})
export class OrganProfile implements OnInit {
  boardMembers = [];
  memberHeading = [];
  constructor(
    private data: DataServiceService
  ) { }
  ngOnInit() {
    this.data.getBoardMembers().subscribe((values) => {
      this.boardMembers = values;
    })
    // this.boardMembers = StaticData.boardMembers.data;
    // this.memberHeading = StaticData.boardMembers.heading;

  }
}
