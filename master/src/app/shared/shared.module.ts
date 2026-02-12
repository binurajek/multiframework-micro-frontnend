import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RemoteErrorComponent } from '../remote-error/remote-error.component';

@NgModule({
    declarations: [RemoteErrorComponent],
    imports: [CommonModule, MatButtonModule],
    exports: [RemoteErrorComponent, CommonModule, MatButtonModule]
})
export class SharedModule { }
