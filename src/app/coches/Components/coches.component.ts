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
      precio:20000
    },{
      name:'Audi',
      precio:40000
    },{
      name:'Mini',
      precio:35000
    }];
}
