import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MfeWrapperComponent } from './mfe-wrapper/mfe-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'angularmfe',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'angularmfe',
        exposedModule: './Module',
      })
        .then((m) => m.ChildMfeModule)
        .catch((err) => {
          console.error('Error loading remote:', err);
          return import('./fallback/fallback.module').then(m => m.FallbackModule);
        }),
  },
  {
    path: 'reactmfe',
    component: MfeWrapperComponent,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'reactmfe',
      exposedModule: './MyComponent',
      componentName: 'default'
    }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
