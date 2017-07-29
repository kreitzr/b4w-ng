import { BallsModule } from './b4w-balls-module';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

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

  private timer: any;
  private sub: Subscription;

  private balls: BallsModule = new BallsModule();

  constructor(private b4w: Blend4WebService) {}

  ngOnInit() {
    this.b4w.InitModule(this.balls);

    // this.timer = Observable.timer(0, 500);
    // this.sub = this.timer.subscribe(this.balls.genBall('Color1'));
  }

  sliderChanged(e: Event) {
    this.balls.genBall(e.target.id);

    // this.sub.unsubscribe();
    // this.timer = Observable.timer(0, e.srcElement.value);
    // this.sub = this.timer.subscribe(this.genBall);
  }

  ngOnDestroy() {
    console.log('Destroy timer');
    this.sub.unsubscribe();
  }
}
