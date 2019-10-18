import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AppModule } from 'src/app/app.module';

const routes: Routes = [{path: '', component: AdminComponent}];

@NgModule({
    imports: [AppModule],
    
  })

export class AdminModule { }