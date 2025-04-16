import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import events from '../shared/services/eventService'

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.scss']
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    //return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.fulfilled};
  }

  removeWish() {
    events.emit('removeWish', this.wishText)
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
