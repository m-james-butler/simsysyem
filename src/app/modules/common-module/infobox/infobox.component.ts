import { Component } from '@angular/core';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent {

  userName: string = "Guest";
  imageUrl: string = "../../../../assets/imgs/GuestAv.png"
}
