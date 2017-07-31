import { BallsModule } from './b4w-balls-module';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Blend4WebService } from './b4w.service';
import { Blend4WebModule } from './b4w-module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [Blend4WebService]
})

export class AppComponent implements OnInit, OnDestroy {
  name = 'Blend4Web Test';
  modules: Blend4WebModule[];

  interval1 = 2000;
  interval2 = 2000;

  private subs = {};

  private balls: BallsModule = new BallsModule();

  constructor(private b4w: Blend4WebService) {
    this.balls.onLoadCallback$.subscribe(this.initScene);
  }

  ngOnInit() {
    this.b4w.InitModule(this.balls);
  }

  private initScene = () => {
    this.subs['Color1'] = Observable.timer(0, 2000).subscribe(() => {
      this.balls.genBall('Color1');
    });

    this.subs['Color2'] = Observable.timer(1000, 2000).subscribe(() => {
      this.balls.genBall('Color2');
    });
  }

  private initTimers(id: string, value: number) {
    this.subs[id].unsubscribe();
    this.subs[id] = Observable.timer(value / 2, value).subscribe(() => {
      this.balls.genBall(id);
    });
  }

  sliderChanged(e: any) {
    this.initTimers(e.target.id, e.target.value);
  }

  ngOnDestroy() {
    console.log('Destroy timer');
    // this.sub1.unsubscribe();
    // this.sub2.unsubscribe();
  }
}
