import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  geolocationPosition: any = null;

  constructor() { }

  getPos() {
    if (window.navigator && window.navigator.geolocation) {
      console.log('get localisation...' + this.geolocationPosition);
      window.navigator.geolocation.getCurrentPosition(
          position => {
          this.geolocationPosition = position,
            console.log(position)
        },
          error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };
  }

  ngOnInit() {
  }

}
