import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Microfrontend1RoutingModule } from './microfrontend1-routing.module';
import { Microfrontend1Component } from './microfrontend1/microfrontend1.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    Microfrontend1Component
  ],
  imports: [
    CommonModule,
    Microfrontend1RoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule
  ]
})
export class Microfrontend1Module { }
