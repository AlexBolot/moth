import { Component, Input, OnInit } from '@angular/core';
// https://newproject-5d731.firebaseapp.com/auth/dashboard

@Component({
  selector: 'round-progressbar',
  templateUrl: './round-progressbar.component.html',
  styleUrls: ['./round-progressbar.component.scss']
})
export class RoundProgressbarComponent implements OnInit {


  @Input() current;
  @Input() end;
  @Input() background;
  @Input() color;
  @Input() boxcolor;
  @Input() title;



  public radius = 250;
  public stroke = "20";
  public semicircle = false;
  public rounded = true;
  public clockwise = false;
  public responsive = true;
  public duration = "800";
  public animation = 'easeInOutQuart';

  constructor() { }

  ngOnInit() {
  }
  getOverlayStyle() {
    let isSemi = this.semicircle;

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'font-size': this.radius / 7 + 'px'
    };
  }

}
