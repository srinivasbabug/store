import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stores';
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
