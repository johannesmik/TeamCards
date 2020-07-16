import { Component } from '@angular/core';
import { DisplayCardPage } from '../display-card/display-card.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    displayCard = DisplayCardPage;

    reorder(e): void {
        e.detail.complete();
    }

}


