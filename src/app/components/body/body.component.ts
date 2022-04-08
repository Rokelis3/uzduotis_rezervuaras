import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public talpa?:number;
  public pildymoGreitis?:number;
  public laikas?:number;
  public rezervuaras:number=0;


  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    if(this.talpa!=null && this.pildymoGreitis!=null && this.laikas!=null){
    this.rezervuaras=Math.round((this.pildymoGreitis*this.laikas/this.talpa)*100);
    }
  }
}
