import { Component, Input } from '@angular/core';
import { Character } from '../../Interfaces/character.interfaces';

@Component({
  selector: 'coches-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunk',
    precio:0
  }]
}
