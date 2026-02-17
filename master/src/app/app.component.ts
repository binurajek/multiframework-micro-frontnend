import { Component, ViewChild } from '@angular/core';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  @ViewChild(SidemenuComponent) sidemenu!: SidemenuComponent;

  constructor() { }

  toggleMenu() {
    this.sidemenu.toggle();
  }
}

