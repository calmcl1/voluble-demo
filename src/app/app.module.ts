import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { ContactListComponent } from './contact-list/contact-list.component';
//import { NoOrganizationComponent } from './no-organization/no-organization.component';

export function getAuthToken(): string {
  return localStorage.getItem('access_token')
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    //NoOrganizationComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MessagesModule,
    AuthModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getAuthToken,
        whitelistedDomains: ['localhost:4200', 'auth0.com', 'voluble-poc.herokuapp.com', 'crewtext.com', 'lvh.me:5000']
      }
    }),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
