import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {


  constructor(public _data: DataService, private router: Router) { }


  ngOnInit() {
   if(!this._data.search) {
      this.router.navigateByUrl('/');
    }
    this._data.localisation.subscribe(value => this._data.searchCook(value));
    this._data.restaurant.subscribe(value => {this.router.navigateByUrl('/result')});
  }

}
