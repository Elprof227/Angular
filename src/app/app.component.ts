import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = Date.now();
  membre = [
    {
       nom :'zabaou ',
       prenom :'yac',
       description:'',
       enforme : false
},
  {
     nom :'Razak',
    prenom :'Abdou',
    description:'',
    enforme : false
  },
  {
     nom :'illiass',
     prenom :'Adamou',
     description:'',
     enforme : true
}, {
  nom :'Moussa',
 prenom :'Mahamadou',
 description:'',
 enforme : false
}
    
]
onUpdate() {
  console.log('Mettre a jour les statuts !!!');
}
}
