import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataServiceService } from '../data-service.service';
import { animations } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: animations
})
export class HomeComponent implements OnInit {
  carousal_images = [];
  highlight_images = [];
  visionText = "";
  constructor(
    private http: Http,
    private data: DataServiceService,
    
  ) { }

  ngOnInit() {
    this.data.getCarousal().subscribe((value) => {
      // console.log(value);
      this.carousal_images = value;
      // console.log(this.carousal_images);
    });
    this.data.getHighlights().subscribe((value) => {
      this.highlight_images = value
    });
    this.data.getVisionText().subscribe((value) => {
      this.visionText = value;
    });
  }
  hover = "off";
  onmouseenter() {
    this.hover = this.hover === "off" ? "on" : "off";
  }

}
