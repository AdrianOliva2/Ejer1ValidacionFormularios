import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JokeService } from './joke.service';

@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
