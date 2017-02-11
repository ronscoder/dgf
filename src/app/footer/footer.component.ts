import { Component, OnInit, Optional } from '@angular/core';
import { MdDialog, MdSnackBar, MdDialogConfig, DialogPosition, MdDialogClose, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public mddiag: MdDialog,
    private mdsnack: MdSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.mdconfig.height = "90%";
    this.mdconfig.width = "60%";
  }

  ngOnInit() {
  }
  private mdconfig = new MdDialogConfig();
  disclaimer() {

    // mdconfig.disableClose = false;
    // mdconfig.position = {left: "10em"};

    this.mddiag.open(Disclaimer, this.mdconfig);
    //** Prevent link propagation

  }
  privacy() {
    this.mddiag.open(Privacy, this.mdconfig);
  }
  terms() {
    this.mddiag.open(Terms, this.mdconfig);
  }
}

@Component({
  templateUrl: './disclaimer.html'
})
export class Disclaimer {
  constructor(
    @Optional() public dialogRef: MdDialogRef<Disclaimer>
  ) {
  }
}

@Component({
  template: `
  <md-card style="margin:auto">
  <p>Please wait</p>
      <md-spinner></md-spinner>
      </md-card>
  `
})
export class WaitComponent {

}

@Component({
  templateUrl: './privacy.html'
})
export class Privacy {
  constructor(
    @Optional() public dialogRef: MdDialogRef<Privacy>
  ) {
  }
}

@Component({
  templateUrl: './t&c.html'
})
export class Terms {
  constructor(
    @Optional() public dialogRef: MdDialogRef<Terms>
  ) {
  }
}