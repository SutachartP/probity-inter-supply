import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Bootstrap 5
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Translate Language
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './menu/home/home.component';
import { ServiceComponent } from './menu/service/service.component';
import { ProjectComponent } from './menu/project/project.component';
import { ClientComponent } from './menu/client/client.component';
import { ContactComponent } from './menu/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ProjectComponent,
    ClientComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

// AOT compilation support  
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}  