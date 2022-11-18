import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input('joke') joke!: Joke;

  @Output('childJoke') childJoke: EventEmitter<Joke>;

  constructor() {
    this.childJoke = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public removeJoke(joke: Joke) {
    this.childJoke.emit(joke);
  }

}
