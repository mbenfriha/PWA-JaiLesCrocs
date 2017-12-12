import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _data: DataService, private router: Router) { }


  getPos() {
    if (window.navigator && window.navigator.geolocation) {
      this._data.setSearch(true);
      this.router.navigateByUrl('/search');

      window.navigator.geolocation.getCurrentPosition(
          position => {
            this._data.setLocalisation({latitude: position.coords.latitude, longitude: position.coords.longitude});

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
