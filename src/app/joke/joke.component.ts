import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input('joke') joke!: Joke;

  constructor(private jokeService: JokeService) {
  }

  ngOnInit(): void {
  }

  public removeJoke(joke: Joke) {
    this.jokeService.removeJoke(joke)
  }

}
