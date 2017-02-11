import { Component, Input, trigger, transition, state, style, animate } from '@angular/core';
import { Http } from '@angular/http';
import { DataServiceService } from './data-service.service';
import { animations } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:
  animations
})
export class AppComponent {
  
  title = 'app works!';
  public contacts = [];
  constructor(
    private http: Http,
    private data: DataServiceService
  ) { }
  ngOnInit() {
    this.data.getContacts().subscribe(
      (res) => {
        console.log(res);
        this.contacts.push(res);
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
