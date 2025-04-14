import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  listFilter: any = '0';

  newWishText = '';

  title = 'wish list';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
    // let value = this.listFilter;
    // if(value === '0') {
    //   return this.items;
    // } else if (value === '1') {
    //   return this.items.filter(item => !item.isComplete)
    // } else {
    //   return this.items.filter(item => item.isComplete)
    };

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
