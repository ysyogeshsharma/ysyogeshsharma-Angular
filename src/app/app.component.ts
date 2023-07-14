import { Component } from '@angular/core';
import {Movie} from './movie';
import {moviedb} from './movie';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 movies:Movie[]=moviedb;
}
