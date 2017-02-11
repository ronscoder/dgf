import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaintForm: FormGroup = null;
  constructor() {
    this.complaintForm = new FormGroup({

    })
  }

  ngOnInit() {
  }
  submit(frm: NgForm) {
    console.log(frm.value);
  }
}
