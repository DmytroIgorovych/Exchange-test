import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyObj } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  responseType?: 'arraybuffer'

  getDataMethod(): Observable<CurrencyObj[]>{

    return this.http.get<CurrencyObj[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  }
}
