import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"employees",loadChildren:'./employees/employees.module#EmployeesModule'},
  {path:"" ,component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
