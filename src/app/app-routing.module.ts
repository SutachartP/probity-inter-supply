import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './menu/home/home.component';
import { ServiceComponent } from './menu/service/service.component';
import { ProjectComponent } from './menu/project/project.component';
import { ClientComponent } from './menu/client/client.component';
import { ContactComponent } from './menu/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'service',
    component: ServiceComponent
  }, {
    path: 'project',
    component: ProjectComponent
  }, {
    path: 'client',
    component: ClientComponent
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
