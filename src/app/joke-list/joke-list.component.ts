import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  
  private jokes!: Joke[]; 

  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {
    this.jokes = this.jokeService.getJokes();
    this.jokeService.getJokes$().subscribe(jokes => this.jokes = jokes)
  }

  public getJokes(): Joke[] {
    return this.jokes;
  }

}
