import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private jokes: Joke[];
  private jokesSubject: Subject<Joke[]>;

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hellome (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought Thats not very mature")
    ];

    this.jokesSubject = new Subject();
  }

  public getJokes(): Joke[] {
    return [...this.jokes]
  }

  public getJokes$(): Observable<Joke[]> {
    return this.jokesSubject.asObservable();
  }

  public removeJoke(joke?: Joke) {
    if (joke != null){
      this.jokes.forEach(
        (actJoke, ind) => {
          if (actJoke.getPunchline() == joke.getPunchline() && actJoke.getSetup() == joke.getSetup()){
            this.jokes.splice(ind, 1);
          }
        }
      )
    }

    this.jokesSubject.next([...this.jokes]);
  }

  public addJoke(joke: Joke) {
    this.jokes.unshift(joke);
    this.jokesSubject.next([...this.jokes]);
  }
}
