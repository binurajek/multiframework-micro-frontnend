import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildMfeComponent } from './childmfe.component';
const routes: Routes = [
    {
        path: '',
        component: ChildMfeComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChildMfeRoutingModule { }
