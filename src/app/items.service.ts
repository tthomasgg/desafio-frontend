import { Items } from './items.model';

export class ItemsService {
  private items: Items[] = [];

  constructor () {
    this.fetch();
  }

  getItems() {
    return this.items;
  }

  getItem(id: number): Items {
    const item = this.items.find(
      (s) => {
        return s.codigo === id;
      }
    );
    return item;
  }

  removeItem(id: number) {
    const item = this.items.find(
      (s) => {
        return s.codigo === id;
      }
    );

    this.items = this.items.filter(el => el !== item);

    this.commit();
  }

  addItem(item: Items, newItem) {
    if (newItem) {
      const lastItem = this.items[this.items.length-1];
      item.codigo = lastItem.codigo+1;
    }
    this.items.push(item);

    this.items.sort(function(obj1, obj2){
      return obj1.codigo - obj2.codigo;
    });

    this.commit();
  }

  updateItem(item: Items) {
    this.removeItem(item.codigo);
    this.addItem(item, false);

    this.commit();
  }

  commit() {
    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(this.items));

    this.fetch();
  }

  fetch() {
    this.items = JSON.parse(localStorage.getItem('items'));
  }
}
