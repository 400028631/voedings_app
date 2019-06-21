import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Drink {
  id: number;
  title: string;
  description: string;
}

const DRINKS_KEY = 'my-drinks';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addDrink(drink: Drink): Promise<any> {
    return this.storage.get(DRINKS_KEY).then((drinks: Drink[]) => {
      if (drinks) {
        drinks.push(drink);
        return this.storage.set(DRINKS_KEY, drinks);
      } else {
        return this.storage.set(DRINKS_KEY, [drink]);
      }
    });
  }

  getDrinks(drink: Drink): Promise<Drink[]> {
    return this.storage.get(DRINKS_KEY);
  }

  updateDrink(drink: Drink): Promise<any> {
    return this.storage.get(DRINKS_KEY).then((drinks: Drink[]) => {
      if (!drinks || drinks.length === 0) {
        return null;
      }

      const newDrinks: Drink[] = [];

      for(const i of drinks) {
        if(i.id === drink.id) {
          newDrinks.push(drink);
        } else {
          newDrinks.push(i);
        }

        return this.storage.set(DRINKS_KEY, newDrinks);
      }
    });
  }

  deleteDrink(id: number): Promise<Drink> {
    return this.storage.get(DRINKS_KEY).then((drinks: Drink[]) => {
      if (!drinks || drinks.length === 0) {
        return null;
      }

      const toKeep: Drink[] = [];

      for (const i of drinks) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }

      return this.storage.set(DRINKS_KEY, toKeep);
    });
  }
}
