import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_REQUEST } from '@ngrx/router-store';
import { tap, withLatestFrom, map, mergeMap, filter, exhaustMap, catchError, concatMap, switchMap, delay, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  ActionTypes,
  ApiError, getContador,
} from './global.action';
import { Observable, of, combineLatest, concat, forkJoin } from 'rxjs';
import { State } from './global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../services/api.services';

@Injectable({ providedIn: 'root' })
export class GeneralEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private router: Router,
    private store$: Store,
  ) { }

  getContador$ = this.actions$.pipe(
    ofType<getContador>(ActionTypes.getContador),
    map((action) => {
      return {}
    })
  );

  putContador$ = this.actions$.pipe(
    ofType<getContador>(ActionTypes.putContador),
    map((action) => {
      return {}
    })
  );

}

export const effects = [
  GeneralEffects,
];