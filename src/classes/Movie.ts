import { Director } from '../models/Director';
import { IVideo } from '../interfaces/IVideo';

export class Movie implements IVideo<string> {
  constructor(
    public title: string,
    private duration: number,
    readonly hasOscars: boolean,
    public director: Director<string>
  ) { }

  getDuration() {
    return this.duration;
  }

  getInfo() {
    return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`
  }

  play(): void {
    console.log("Playing movie..." + this.title)
  }
}