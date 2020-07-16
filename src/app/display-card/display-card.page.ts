import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.page.html',
  styleUrls: ['./display-card.page.scss'],
})
export class DisplayCardPage implements OnInit {

  public text: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.text = this.route.snapshot.paramMap.get('text');
  }

}
