import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public plane:string;
  constructor() {
    this.plane='../../assets/Images/airplane.png';
  }

  ngOnInit(): void {}
}
