import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatToolbarModule,MatFormFieldModule,MatMenuModule,MatIconModule,MatExpansionModule,MatSidenavModule,MatListModule,MatButtonModule,MatCardModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule,MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {TrainingComponent} from './components/training/training.component';
import {VirtualMComponent} from './components/virtualM/virtualM.component';
import {TrainerComponent} from './components/trainer/trainer.component';
import {VM_RegComponent} from './components/VM_Reg/VM_Reg.component';
import {ReportComponent} from './components/report/report.component';
import {ProfileComponent} from './components/profile/profile.component';


import { appRoutes } from './routerConfig';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    TrainingComponent,
    VirtualMComponent,
    TrainerComponent,
    VM_RegComponent,
    ReportComponent,
    ProfileComponent
  
  ],

  

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
