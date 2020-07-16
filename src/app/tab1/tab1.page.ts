import { Component } from '@angular/core';
import { DisplayCardPage } from '../display-card/display-card.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  displayCard = DisplayCardPage;

  reorder(e): void {
    e.detail.complete();
  }
}
