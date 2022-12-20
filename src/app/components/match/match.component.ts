import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { Game } from './../../models/Game';

@Component({
  selector: 'app-todos',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class TodosComponent implements OnInit {

  games: Game[] = [];
  teams: Team[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.teams = [new Team('Seahawks'), new Team('Giants')]
    this.games = [new Game(this.teams[0], this.teams[1])
    ]
  }

  toggleDone (id:number) {
    this.games.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.games = this.games.filter((v, i) => i !== id);
  }

  addGame() {
    this.games.push(new Game(new Team('test'), new Team('test2')));

    this.inputTodo = "";
  }

}
