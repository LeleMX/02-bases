import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
})
export class DragonBallSuperPageComponent {
  // constructor(public dragonballService: DragonballService) { }
  public dragonballService = inject(DragonballService);

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 800 },
  //   // { id: 3, name: 'Piccolo', power: 3000 },
  //   // { id: 4, name: 'Yamcha', power: 500 },
  // ]);
  // addCharacter(newCharacter: Character) {
  //   this.characters.update((list) => [...list, newCharacter]);
  // }
  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // })
}
