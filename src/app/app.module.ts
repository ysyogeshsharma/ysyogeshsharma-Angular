import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MoviecardsComponent } from './moviecards/moviecards.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,NgbModule ],
  declarations: [ AppComponent, MoviecardsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
