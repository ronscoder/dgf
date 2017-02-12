import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaintForm: FormGroup = null;
  constructor(
    private http: Http
  ) {
    this.complaintForm = new FormGroup({

    })
  }

  ngOnInit() {
  }
  submit(frm: NgForm) {
    console.log(frm.value);
    let values = frm.value;
    let userdata = `
    <table>
      <tr><td>House #</td><td>${values['houseNo']}</td></tr>
      <tr><td>Room #</td><td>${values['roomNo']}</td></tr>
      <tr><td>District</td><td>${values['district']}</td></tr>
      <tr><td>State</td><td>${values['state']}</td></tr>
      <tr><td>Country</td><td>${values['country']}</td></tr>
      <tr><td>Pin Code</td><td>${values['pincode']}</td></tr>
      <tr><td>Phone #</td><td>${values['phone']}</td></tr>
      <tr><td>User email #</td><td>${values['email']}</td></tr>
    </table>
    `;
    let mailOptions = {
      from: `${values['firstName']} ${values['middleName']} ${values['lastName']} <site@dynamicgroupoffoundations.org>`,
      to: "info@dynamicgroupoffoundations.org",
      subject: values['subject'],
      text: `${values['body']}\\n${values}`,
      html: `<p>${values['body']}</p><hr><small>${userdata}</small>`
    };
    console.log(mailOptions);
    this.http.post('/sendmail', mailOptions).subscribe(
      (response) => {
        console.log(response);

      }
    )
  }
}
