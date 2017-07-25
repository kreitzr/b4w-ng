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

//   private _main_ball: any;
  private _obj_count = 0;
  private _balls: any[] = [];

  constructor(private b4w: Blend4WebService) {}

  ngOnInit() {
        this.b4w.InitModule(new BallsModule());

    // // this.timer = Observable.timer(0, 500);
    // // this.sub = this.timer.subscribe(this.genBall);
  }

  sliderChanged(e: Event){
    // this.sub.unsubscribe();
    // this.timer = Observable.timer(0, e.srcElement.value);
    // this.sub = this.timer.subscribe(this.genBall);
  }

  genBall(): void {
    //   let context = b4w.require("balls_main");

    //   console.log(this._main_ball);
        // let new_ball = this.m_obj.copy(this._main_ball, "Ball." + this._obj_count++);

        // let rand_x = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
        // let rand_y = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
        // this.m_trans.set_translation(new_ball, rand_x, rand_y, 5);

        // this.m_scenes.append_object(new_ball);
        // this._balls.push(new_ball);

        // this.m_phys.enable_simulation(new_ball);

        // // Start removing balls if count exceeds n-balls
        // if (this._balls.length > 200) {
        //     let old_ball = this._balls.shift();
        //     this.m_scenes.remove_object(old_ball);
        // }
  }

  ngOnDestroy() {
    console.log('Destroy timer');
    this.sub.unsubscribe();
  }
}
