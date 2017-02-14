import { Component, ViewChild, Input, trigger, transition, state, style, animate } from '@angular/core';
import { Http } from '@angular/http';
import { DataServiceService } from './data-service.service';
import { animations } from './animations';
import { MdMenuTrigger } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:
  animations
})
export class AppComponent {
  // @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  items: FirebaseListObservable<any[]>;
  public contacts = [];
  constructor(
    private http: Http,
    private data: DataServiceService,
    private af: AngularFire
  ) {
    this.items = af.database.list('/persons');
  }
  ngOnInit() {
    this.data.getContacts().subscribe(
      (res) => {
        // console.log(res);
        this.contacts = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  mouseOnLogo = "off";
  onmouseenter() {
    this.mouseOnLogo = this.mouseOnLogo === "off" ? "on" : "off";
  }
}
