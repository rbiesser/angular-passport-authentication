import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// added FormsModule
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// added RequestOptions
import { HttpModule, RequestOptions } from '@angular/http';
// added LocationStrategy, HashLocationStrategy
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AuthenticationModule,
    HomeModule,
    RouterModule.forRoot(AppRoutes),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }