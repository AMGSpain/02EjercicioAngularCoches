import { Component } from '@angular/core';
import { Character } from '../Interfaces/character.interfaces';

@Component({
  selector: 'app-coches-page',
  templateUrl: '../Pages/coches.component.html',
  styleUrls: ['../Pages/coches.component.css']
})
export class CochesComponent {
    public characters: Character[] = [{
      name:'Ford',
      modelo:'Mondeo',
      precio:20000
    },{
      name:'Audi',
      modelo:'A1',
      precio:40000
    },{
      name:'Mini',
<<<<<<< HEAD
=======
      modelo:'Cooper',
>>>>>>> 944f9a8d1af24bb904b3257fee88d8e232576f23
      precio:35000
    }];
}
