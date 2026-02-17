import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MfeWrapperComponent } from './mfe-wrapper/mfe-wrapper.component';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    MfeWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSidenavModule,
    MatListModule,
    SharedModule,
    SidemenuComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
