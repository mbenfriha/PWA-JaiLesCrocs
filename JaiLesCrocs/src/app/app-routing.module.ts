import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent }      from './result/result.component';
import { SearchComponent }      from './search/search.component';
import { HomeComponent }        from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
