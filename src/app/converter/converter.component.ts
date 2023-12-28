import { Component, Input, OnInit } from '@angular/core';

interface CurrencyObj {
  cc:string,
  exchangedate:string,
  r030:number,
  rate:number,
  txt:string
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {
  
  firstCurrency:number=0;
  secondCurrency:number=0
  firstRate:number=1;
  secondRate:number=1;
  currentRate:number=0;

  @Input() data:any

  firstCurrentCurrency(value:string){
    let elem:CurrencyObj = this.data.find((item:CurrencyObj) => item.txt === value);
    
    if (elem == undefined) {
      elem = {
        cc:'UAH',
        exchangedate:'',
        r030: 1,
        rate: 1,
        txt:'Українська гривня'
      }
    }

    this.firstRate = elem.rate;
    this.currentRate=this.firstRate/this.secondRate;
  }

  secondCurrentCurrency(value:string){
    let elem:CurrencyObj = this.data.find((item:CurrencyObj) => item.txt === value);

    if (elem == undefined) {
      elem = {
        cc:'UAH',
        exchangedate:'',
        r030: 1,
        rate: 1,
        txt:'Українська гривня'
      }
    }

    this.secondRate = elem.rate;
    this.currentRate=this.firstRate/this.secondRate;
  }

  firstValue(){
    this.secondCurrency=this.firstCurrency * this.currentRate;
  }

  secondValue(){
    this.firstCurrency=this.secondCurrency / this.currentRate;
  }

  ngOnInit(): void {
  }
}
