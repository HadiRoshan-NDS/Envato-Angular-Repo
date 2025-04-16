import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import events from '../shared/services/eventService'

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.scss']
})
export class WishListItemComponent {
  @Input() wish!: WishItem;
  // @Input() fulfilled!: boolean;
  // @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    //return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.wish.isComplete};
  }

  removeWish() {
    events.emit('removeWish', this.wish)
  }

  toggleFulfilled() {
this.wish.isComplete = !this.wish.isComplete;
  }

}
