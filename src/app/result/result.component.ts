import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  distance = 0;
  result = null;
  lat: number = 0;
  lng: number = 0;
  myLat: number = 0;
  myLng: number = 0;

  constructor(public _data: DataService, private router: Router) { }

  ngOnInit() {
    if(!this._data.search) {
      this.router.navigateByUrl('/');
    }
    this._data.restaurant.subscribe(value => {

      this.distance = value.distance;
      this.lat = value.result.geometry.location.lat;
      this.lng = value.result.geometry.location.lng;
      this.myLng = value.my.lon;
      this.myLat = value.my.lat;
      this.result = value.result;
    });
  }

}
