import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

declare var google: any;
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  map: any;
  geoJson: {};
  formatted_address: string = "Loading address";
  position: Coordinates;
  constructor(private http: Http) { }

  ngOnInit() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.error_loc, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
    // }
    // else {

    // }
    // this.setPosition(24.8219096, 93.9605744)
  }
  setPosition(lat: number, long: number) {
    // this.position = position.coords;
    // console.log(position);
    this.map = new google.maps.Map(document.getElementById('contactusmap'), {
      center: { lat: 24.8219096, lng: this.position.longitude },
      zoom: 15
    });
    // const lat = position.coords.latitude;
    // console.log(lat);
    // const long = position.coords.longitude;
    // console.log(long);
    // let geoURL = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=false`;
    // console.log(geoURL);
    // // this.http.get(geoURL).toPromise().then(data => this.dataReceived(data.json()));
    // this.http.get(geoURL).subscribe(
    //   (data) => {
    //     this.dataReceived(data.json());
    //   }
    // )

  }

  dataReceived(geoJson: any) {
    this.geoJson = geoJson.results[0];
    this.formatted_address = geoJson.results[0].formatted_address;
    console.log(this.geoJson);
  }
  error_loc(err: any) {
    console.warn(err.code + ":" + err.message);
  }

  public boolLoading = true;
  loaded(){
    this.boolLoading = false;
  }
}
