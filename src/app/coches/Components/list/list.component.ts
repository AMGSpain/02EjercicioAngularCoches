import { Component } from '@angular/core';
import { Character } from '../../Interfaces/character.interfaces';

@Component({
  selector: 'coches-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  public characterList: Character[] = [{
    name:'Trunk',
    precio:0
  }]
}
