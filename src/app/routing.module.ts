import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import {
  OrgansationStructureComponent, AdminLegalDetailsComponent,
  OrganProfile
}
  from './organsation-structure/organsation.component';
import { ComplaintsComponent } from './complaints/complaints.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent // pathMatch: 'full',// redirectTo: '/materials',
  },
  { path: 'dev', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'organisation_structure', component: OrgansationStructureComponent },
  { path: 'adminlegal_details', component: AdminLegalDetailsComponent },
  { path: 'organisation_profile', component: OrganProfile },
  { path: 'complaints_suggestions', component: ComplaintsComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
