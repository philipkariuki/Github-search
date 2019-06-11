import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component';
import { NotfoundComponent } from '../notfound/notfound.component';


// Defining routes
const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'notfound',component:NotfoundComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],

  declarations: []
})
export class RoutingModule { }

