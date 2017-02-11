import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServiceService {
  private server = "http://localhost:5000";
  constructor() { }

  getContacts(): Observable<any> {
    // console.log(StaticData.contacts);
    // return Observable.create((observer)=>{
    //   observer.next(StaticData.contacts)
    // });
    return Observable.from(StaticData.contacts);
  }

  getCarousal() {
    return Observable.from(StaticData.carousal_images);
  }

  getHighlights() {
    return Observable.from(StaticData.highlight_images);
  }
  getVisionText() {
    return Observable.create((observer) => {
      observer.next(StaticData.vision_text);
    });
  }

}

export class StaticData {
  static contacts = [
    { number: "+918794914712" },
    { number: "+918794781596" }
  ]

  static carousal_images = [
    { url: 'assets/images/car_1.jpg', caption: "Let's evolve and transform", title: "Vision" },
    { url: 'assets/images/car_2.jpg', caption: "Let's evolve and transform", title: "Evolve" },
    { url: 'assets/images/car_3.png', caption: "Let's evolve and transform", title: "Transform" }
  ];
  static highlight_images = [
    { url: 'assets/images/hi_1.png', title: "Economic Development" },
    { url: 'assets/images/hi_2.png', title: "Health" },
    { url: 'assets/images/hi_3.png', title: "Education" }
  ]

  static vision_text = `We aim at helping the community in Manipur as a whole. 
  Specifically, we work to address poverty and its impacts in the community. 
  We toil to frame strategies, implement effectively 
  and henceforth attempt to abolish poverty from the state of Manipur.`

  static boardMembers = {
    heading: ['Name', 'Designation', 'Designation', 'Occupation', 'Qualification'],
    data: [
      { name: 'Irungbam Samananda Singh', designation: 'President', occupation: 'Educationist', qualification: 'M.Sc' },
      { name: 'Lairenmayum Nandakumar Singh', designation: 'Vice- President', occupation: 'Business', qualification: 'B.Com' },
      { name: 'Soibam Johny Singh', designation: 'Secretary', occupation: 'Educationist', qualification: 'M.A' },
      { name: 'Senjam Kopeshwor Meitei', designation: 'Treasurer', occupation: 'Educationist', qualification: 'B.Sc' },
      { name: 'Kingsli Leimapokpam', designation: 'Trustee', occupation: 'Accountant', qualification: 'B.Sc' }
    ]
  }
}