import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  menuActive = false;
  goTopVisible = false;
  

  public constructor() {
  }

  public ngOnInit() {
  }

  onMenuTrigger() {
      this.menuActive = !this.menuActive;
  }
    
  hideMenu() {
      this.menuActive = false;
  }
    
  top() {
      document.getElementsByTagName('header')[0].scrollIntoView({behavior: 'smooth', block: 'start'});
      
  }    
}
