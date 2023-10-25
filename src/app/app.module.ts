import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InterceptorRequestsInterceptor } from './interceptors/interceptor-requests.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SpinnerComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorRequestsInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
