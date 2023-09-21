import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServesComponent } from './component/serves/serves.component';
import { ContentComponent } from './component/content/content.component';

const routes: Routes = [
  // {path:"" , redirectTo:"home" ,pathMatch:'full'},
  // {path:"home" , component:HomeComponent},
  // {path:"about" , component:AboutComponent},
  // {path:"serves" , component:ServesComponent},
  // {path:"content" , component:ContentComponent},
  // {path:"**" , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
