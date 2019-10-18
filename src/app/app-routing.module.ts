import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'training',
        loadChildren: () =>
          import('./components/training/training-routing.module').then(
            m=>m.TrainingModule
          )
       },
     
    {
      path: 'home',
      loadChildren: () =>
        import('./components/home/home-routing.module').then(
          m=>m.HomeModule
          )
        },

        {
          path: 'admin',
          loadChildren: () =>
            import('./components/admin/admin-routing.module').then(
              m=>m.AdminModule
              )
            }
       ]
      
    }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
