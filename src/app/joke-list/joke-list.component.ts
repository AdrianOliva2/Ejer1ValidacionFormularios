import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  
  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {}

  public removeJoke(e: Joke) {
    this.jokeService.removeJoke(e);
  }

}
