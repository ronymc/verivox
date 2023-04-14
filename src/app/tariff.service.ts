import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Tariff } from './tariff';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  private tarifsUrl = 'api/tariffs';
  private allTariffs: Tariff[] = [];

  constructor(private http: HttpClient) {}

  getTarifs$(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.tarifsUrl).pipe(
      tap((tariffs) => (this.allTariffs = tariffs)),
      catchError(this.handleError)
    );
  }

  getAllTarifs$(): Observable<Tariff[]> {
    return of(this.allTariffs);
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
