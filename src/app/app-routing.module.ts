import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { ContactComponent } from './menu/contact/contact.component';
import { HomeComponent } from './menu/home/home.component';
import { ProjectComponent } from './menu/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'aboutus',
    component: AboutUsComponent
  }, {
    path: 'project',
    component: ProjectComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
