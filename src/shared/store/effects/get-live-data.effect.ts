import { ApiService } from './../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as featureActions from '../actions/actions';

@Injectable()
export class MyFeatureStoreEffects {
  constructor(private apiService: ApiService, private actions$: Actions) {}

  @Effect()
  getLiveData$ = this.actions$.pipe(
    ofType<featureActions.GetLiveData>(
      featureActions.ActionTypes.GET_LIVE_DATA
    ),
    switchMap(action =>
      this.apiService
          .getLiveData()
          .pipe(
            map(
              liveData =>
                new featureActions.SaveLiveData({liveData})
            ),
            catchError(error =>
              of(Error)
            )
          )
    )
  );
}
