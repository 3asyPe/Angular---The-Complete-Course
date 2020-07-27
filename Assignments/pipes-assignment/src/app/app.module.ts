import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReverserPipe } from './reverser.pipe';
import { SorterPipe } from './sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverserPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
