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
    this.teams = [new Team('Seahawks', 0, 0, 0), new Team('Giants', 0, 0, 0)]
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

  addTodo () {
    this.games.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}
