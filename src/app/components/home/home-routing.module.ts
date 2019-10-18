import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppModule } from 'src/app/app.module';

const routes: Routes = [{path: '', component: HomeComponent}];

@NgModule({
    imports: [AppModule],
    
  })

export class HomeModule { }