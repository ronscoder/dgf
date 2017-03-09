import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import { AppComponent } from './app.component';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { CarouselModule } from 'ng2-bootstrap';

import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { TabsModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap';
import { DataServiceService } from './data-service.service';
import { ContactusComponent } from './contactus/contactus.component';
import {
  FooterComponent, Disclaimer,
  Privacy,
  Terms
} from './footer/footer.component';
import {
  OrgansationStructureComponent, AdminLegalDetailsComponent
  , OrganProfile
}
  from './organsation-structure/organsation.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { WaitComponent, ResponseComponent } from './common/common.component';

import { AngularFireModule } from 'angularfire2';
import { initializeApp } from 'firebase';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component'
export const afconfig = {
  apiKey: "AIzaSyDY96w9z7LWcH8tl0LuD__u3atYnohuC_I",
  authDomain: "dynogroup-1f713.firebaseapp.com",
  databaseURL: "https://dynogroup-1f713.firebaseio.com",
  storageBucket: "dynogroup-1f713.appspot.com",
  messagingSenderId: "79128301483"
};

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ContactusComponent,
    FooterComponent,
    Disclaimer,
    WaitComponent,
    ResponseComponent,
    Privacy,
    Terms,
    OrgansationStructureComponent,
    AdminLegalDetailsComponent,
    OrganProfile,
    ComplaintsComponent,
    ProjectsComponent,
    ProjectComponent,
  ],
  entryComponents: [Disclaimer, WaitComponent, Privacy, Terms, ResponseComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgbModule.forRoot(),
    DatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule,
    // initializeApp(afconfig),
    AngularFireModule.initializeApp(afconfig)
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
