import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RemoteErrorComponent } from '../remote-error/remote-error.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: RemoteErrorComponent }
        ])
    ]
})
export class FallbackModule { }
