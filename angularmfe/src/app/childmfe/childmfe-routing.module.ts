import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildMfeComponent } from './childmfe.component';
import { FeaturesComponent } from './features/features';
import { VersionsComponent } from './versions/versions';

const routes: Routes = [
    {
        path: '',
        component: ChildMfeComponent,
        children: [
            { path: '', redirectTo: 'versions', pathMatch: 'full' },
            { path: 'versions', component: VersionsComponent },
            { path: 'features', component: FeaturesComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChildMfeRoutingModule { }
