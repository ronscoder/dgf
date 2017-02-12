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
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
