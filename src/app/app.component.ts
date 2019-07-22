import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Store } from '@ngrx/store';
import { GameState } from '../shared/store/state/game-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trading simulator';

  constructor(
    // private apiService: ApiService,
    // private store: Store<GameState>
  ) {}

  ngOnInit() {
  }
}
