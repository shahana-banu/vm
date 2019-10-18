import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training.component';
import { AppModule } from 'src/app/app.module';

const routes: Routes = [{path: '', component: TrainingComponent}];

@NgModule({
    imports: [AppModule],
    
  })

export class TrainingModule { }