export class Team {
  public name: string;
  public wins: number;
  public loses: number;
  public ties: number;

  constructor(
    name: string,
    wins: number = 0,
    loses: number = 0,
    ties: number = 0
  ) {
    this.name = name;
    this.wins = wins;
    this.loses = loses;
    this.ties = ties;
  }
}
