import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Contador APP';
  public numero:number = 10;
  public base: number=17;


  acumula(valor:number):void{
    this.numero += valor;
  }

  //base:number = 5;
  
}
