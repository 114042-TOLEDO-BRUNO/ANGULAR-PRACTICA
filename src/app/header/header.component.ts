import { Component } from '@angular/core';

@Component({
  selector: 'app-header',//es el nombre del tag html
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public imgYoutube:string="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_YouTube_%282013-2015%29.svg"

}
