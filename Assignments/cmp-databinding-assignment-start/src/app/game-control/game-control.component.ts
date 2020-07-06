import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output("number") listenableNumber = new EventEmitter<{number: number}>();
  number: number = 0;
  timer;

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    if(this.timer){
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.number = this.number + 1;
      this.listenableNumber.emit({
        number: this.number
      })
    }, 1000)
  }

  stopGame(){
    clearInterval(this.timer);
  }

}
