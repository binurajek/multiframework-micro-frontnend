import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RemoteErrorComponent } from '../remote-error/remote-error.component';

@NgModule({
    declarations: [RemoteErrorComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
    exports: [RemoteErrorComponent, CommonModule, MatButtonModule, MatIconModule]
})
export class SharedModule { }
