import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addContact: FormGroup;
  public alerts: any = [];
  public contacts = [];

  constructor(
    private http: Http,
    private data: DataServiceService
  ) {
    this.addContact = new FormGroup(
      {
        number: new FormControl('', Validators.required)
      }
    )
  }
  ngOnInit() {
    this.data.getContacts().subscribe(
      (res) => {
        this.contacts.push(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

  submitContact() {
    let newContact = {
      number: this.addContact.value['number']
    }
    // this.http.post(this.server + '/contacts', newContact).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.alerts = [];
    //     this.alerts.push({ type: 'success', msg: response.text() });
        this.contacts.push(newContact);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.alerts = [];
    //     this.alerts.push({ type: 'danger', msg: error.text() })
    //   }
    // )
  }

  deleteContact(id: number, index: number) {
    // this.http.delete(this.server + '/contacts/' + id).subscribe(
    //   (response) => {
    //     // this.alerts = [];
    //     // this.alerts.push({type:'success', msg: 'Contact deleted'})
        this.contacts.splice(index, 1);
    //   },
    //   (error) => {

    //   }
    // )
  }
}