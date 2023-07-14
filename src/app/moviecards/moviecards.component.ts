import { Component, OnInit, Input} from '@angular/core';
import {Movie} from '../movie';
@Component({
  selector: 'app-moviecards',
  templateUrl: './moviecards.component.html',
  styleUrls: ['./moviecards.component.css']
})
export class MoviecardsComponent implements OnInit {
@Input() movie:Movie;
  constructor() { }

  ngOnInit() {
  }

}