import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildMfeRoutingModule } from './childmfe-routing.module';
import { ChildMfeComponent } from './childmfe.component';
import { FeaturesComponent } from './features/features';
import { VersionsComponent } from './versions/versions';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [
        ChildMfeComponent,
        FeaturesComponent,
        VersionsComponent
    ],
    imports: [
        CommonModule,
        ChildMfeRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatDividerModule
    ]
})
export class ChildMfeModule { }
