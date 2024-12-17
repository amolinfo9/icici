import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkmansComponent } from './workmans/workmans.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const rout: Routes = [
  { path: 'workmans-policy', component: WorkmansComponent }
];

@NgModule({
  declarations: [
    WorkmansComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rout) 
  ]
})
export class SmeInsuranceModule { }
