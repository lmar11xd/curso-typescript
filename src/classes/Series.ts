import { IEpisodic } from '../interfaces/IEpisodic';
import { IVideo } from '../interfaces/IVideo';
import { Director } from '../models/Director';

export class Series implements IVideo<string>, IEpisodic {
  constructor(
    public title: string,
    private duration: number,
    public director: Director<string>,
    public episodes: number
  ) { }
  
  play(): void {
    console.log("Playing a serires");
  }
}