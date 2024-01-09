import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

export interface CurrencyObj {
  cc:string,
  exchangedate:string,
  r030:number,
  rate:number,
  txt:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Exchange';

  constructor(private getDataService: GetDataService) { }
  dataArray!:CurrencyObj[];
  
  currentDate:string='';
  USDText:string='';
  EURText:string='';
  USDRate:number=0;
  EURRate:number=0;

  ngOnInit(): void {
    this.getDataService.getDataMethod().subscribe(res => {      
      this.dataArray = res;
      this.currentDate= this.dataArray[0].exchangedate;
      this.USDText=this.dataArray[24].txt;
      this.USDRate=this.dataArray[24].rate;
      this.EURText=this.dataArray[31].txt;
      this.EURRate=this.dataArray[31].rate;
    })
  }
}
