import { GameState } from './../../../shared/store/state/game-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../shared/store/selectors/selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  liveData;

  constructor(private store: Store<GameState>) { }

  ngOnInit() {
    // this.store.select(fromStore.selectLiveData)
    //           .subscribe(liveData => {
    //             this.liveData = liveData;
    //             console.log(liveData)
    //           });
  }

  startGame() {
    this.store.dispatch({type: 'GET_LIVE_DATA'});
  }

}
