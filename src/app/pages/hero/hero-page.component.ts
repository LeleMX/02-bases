import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {
  name = signal('Daniel');
  age = signal(25);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description
  })

  capitalizedName = computed(() => this.name().toUpperCase());

  capitalizeName = computed(() => {
    const capitalizedName = `${this.name().toUpperCase()}`;
    return capitalizedName;
  })

  changeHero() {
    this.name.update((c) => 'Spiderman');
    this.age.update((c) => 22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update((c) => 60);
  }
}
