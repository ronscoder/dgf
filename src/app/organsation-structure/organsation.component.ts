import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataServiceService, StaticData } from '../data-service.service';
@Component({
  selector: 'app-organsation-structure',
  templateUrl: './organsation-structure.component.html',
  styleUrls: ['./organsation-structure.component.css']
})
export class OrgansationStructureComponent implements OnInit {
  constructor() { }
  ngOnInit() {
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
export class OrganProfile implements OnInit{
  boardMembers=[];
  memberHeading=[];
  constructor(
    private http: Http
  ){}
  ngOnInit(){
    this.boardMembers = StaticData.boardMembers.data;
    this.memberHeading = StaticData.boardMembers.heading;
  }
}