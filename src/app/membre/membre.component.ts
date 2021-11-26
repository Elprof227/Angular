import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
 @Input() nom: string ="issa";
 @Input() Prenom: string ="Adamou";
 @Input() isEnForme: boolean = true;
 @Input() description : string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
