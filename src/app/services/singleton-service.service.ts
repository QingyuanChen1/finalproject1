import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonServiceService {
  total = 0;
  constructor() { }

  get totalnum(){
    return this.total;
  }


  calculateTotal(money: string, tax: string): void{
    this.total = this.convertor(money) *this.convertor(tax);
  }


  convertor(dollors : string): number{
    return parseFloat(dollors);
  }


}
