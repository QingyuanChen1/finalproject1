import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SingletonServiceService } from '../services/singleton-service.service';

const TAX='1.13';
@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent implements OnInit {
  taxForm!: FormGroup;
  total!: number;

  constructor(private fb: FormBuilder,private singleton: SingletonServiceService) { }

  ngOnInit(): void {
    this.taxForm = this.fb.group({
      money: [''],
      tax: [TAX]
    })
  }


  calculateTotal(money: string, tax: string = TAX): void{
    this.singleton.calculateTotal(money, tax);
  }

  totalnum(): number{
    return this.singleton.total;
  }

}


