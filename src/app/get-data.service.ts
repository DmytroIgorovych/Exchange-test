import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getDataMethod(){
    // Запит на віддалений сервер та автоматично розпарив з json
    // формату у звичайний javascript масив з об'єктами
    return this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  }
}
