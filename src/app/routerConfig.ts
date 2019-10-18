import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { TrainingComponent } from './components/training/training.component';
import { VirtualMComponent} from './components/virtualM/virtualM.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { VM_RegComponent} from './components/VM_Reg/VM_Reg.component';
import { ReportComponent } from './components/report/report.component';
import { ProfileComponent } from './components/profile/profile.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: 'admin', component:AdminComponent},
  { path: 'training', component:TrainingComponent},
  { path: 'virtualM', component:VirtualMComponent},
  { path: 'trainer', component:TrainerComponent},
  { path: 'VM_Reg', component:VM_RegComponent},
  { path: 'report', component:ReportComponent},
  { path: 'profile', component:ProfileComponent}

];
