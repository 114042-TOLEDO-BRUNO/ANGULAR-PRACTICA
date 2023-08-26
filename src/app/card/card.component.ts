import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  public Imagen:string="https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg";
  public Titulo:string="Practica con Angular";
  public Subtitulo:string="Imagen De Referencia";
  constructor(){}
  ngOnInit():void{}
}
