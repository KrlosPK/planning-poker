import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {
  ngOnInit():void {
    console.log("object");
  }
}
