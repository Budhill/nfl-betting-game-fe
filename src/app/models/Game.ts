import { Team } from "./Team";

export class Game {
	public homeTeam:Team;
	public awayTeam:Team;

	constructor(homeTeam: Team, awayTeam: Team) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }
}