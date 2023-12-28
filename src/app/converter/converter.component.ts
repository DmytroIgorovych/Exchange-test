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
  
  firstCurrency!:number;
  secondCurrency!:number;
  firstRate:number=1;
  secondRate:number=1;
  currentRate:number=1;

  @Input() data:any

  firstCurrentCurrency(value:string){
    let elem:CurrencyObj = this.data.find((item:CurrencyObj) => item.txt === value);
    
    if (elem == undefined) {
      this.firstRate = 1;
    } else {
      this.firstRate = elem.rate;
    }
    
    this.currentRate=this.firstRate/this.secondRate;
  }

  secondCurrentCurrency(value:string){
    let elem:CurrencyObj = this.data.find((item:CurrencyObj) => item.txt === value);

    if (elem == undefined) {
      this.secondRate = 1;
    } else {
      this.secondRate = elem.rate;
    }
    
    this.currentRate=this.firstRate/this.secondRate;
  }

  ngOnInit(): void {
  }
}
