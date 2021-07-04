import { Component, OnInit } from '@angular/core';
// import "../../"
@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css'],
})
export class EmptyComponent implements OnInit {
  public airoplane;
  constructor() {}

  ngOnInit(): void {
    this.airoplane = "assets/Images/airplane.png";
  }
}
