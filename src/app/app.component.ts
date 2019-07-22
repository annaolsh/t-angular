import { GetLiveData } from './../shared/store/actions/actions';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Store } from '@ngrx/store';
import { State } from '../shared/store/state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trading simulator';

  constructor(
    private apiService: ApiService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.store.dispatch({type: 'GET_LIVE_DATA'});
  }
}
