import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  form: FormGroup;

  constructor(private jokeService:JokeService) { 
    this.form = new FormGroup({
      broma: new FormControl('',[Validators.required, Validators.minLength(4)]),
      respuesta: new FormControl('',[Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit(): void {
    
  }

  createJoke(setup: HTMLInputElement, punchline: HTMLInputElement) {
    if (this.form?.valid) {
      this.jokeService.addJoke(new Joke(setup.value, punchline.value));
      this.form.get('broma')?.setValue("");
      this.form.get('respuesta')?.setValue("");
      this.form.get('broma')?.setErrors(null);
      this.form.get('respuesta')?.setErrors(null);
    }
  }

}
