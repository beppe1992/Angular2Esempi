import { Squadra } from './squadra';

export class Partita {


	public squadraCasa: Squadra;
    public squadraOspite: Squadra;
    public goalCasa: number;
    public goalOspite: number;

    constructor(squadraCasa: Squadra, squadraOspite: Squadra, goalCasa: number, goalOspite: number) {
        this.squadraCasa = squadraCasa;
        this.squadraOspite = squadraOspite;
        this.goalCasa = goalCasa;
        this.goalOspite = goalOspite;
    }

}
