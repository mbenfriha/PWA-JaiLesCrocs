import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Localisation } from './model/localisation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  public localisation = new Subject<Localisation>();
  public restaurant: any = new ReplaySubject<{}>(null);
  public token: string = "AIzaSyDqBpVM6Gu5rPSQ9xnExkBJGEr4YcpoI6c";
  public search: boolean = false;
  public proxy: string = 'https://cors-anywhere.herokuapp.com/';
  public gmap: string = 'https://maps.googleapis.com/maps/api/';

  constructor(public http: Http) { }

  searchCook(loc) {
    let distance: number = 0;
    this.http.get(this.proxy + this.gmap + 'place/nearbysearch/json?location=' + loc.latitude + ',' + loc.longitude + '&radius=200&type=restaurant&key=' + this.token)
      .map(res => res.json()).subscribe(data => {

        let resultCook = data.results[Math.floor(Math.random() * data.results.length)];

        this.http.get(this.proxy + this.gmap + 'place/details/json?placeid=' + resultCook.place_id + '&key=' + this.token).map(res => res.json()).subscribe(data2 => {

          resultCook = data2.result;

          this.http.get(this.proxy + this.gmap + 'distancematrix/json?units=metric&origins=' + loc.latitude + ',' + loc.longitude + '&destinations=' + resultCook.geometry.location.lat + ',' + resultCook.geometry.location.lng + '&key=AIzaSyBR9qbn52JXC_AKne3F01Z2JjeKCYpcB64')
            .map(res => res.json()).subscribe(data3 => {
              distance = data3.rows[0].elements[0].distance.value;
              resultCook.distance = distance;
              resultCook = {result: resultCook, my: {lat: loc.latitude, lon: loc.longitude}};
              if (resultCook.photos) {
                this.http.get(this.proxy + this.gmap + 'place/photo?maxwidth=400&photoreference=' + resultCook.photos[0].photo_reference + '&key=' + this.token).map(res => res).subscribe(data => {
                  resultCook = {result: resultCook, image: data.url, my: {lat: loc.latitude, lon: loc.longitude}};
                })
              }
              this.restaurant.next(resultCook);
            })

        });
      });
  }

  setLocalisation(loc) {
    this.localisation.next(loc)
  }

  setSearch(bool) {
    this.search = bool;
  }

}
