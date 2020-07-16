import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.page.html',
  styleUrls: ['./display-card.page.scss'],
})
export class DisplayCardPage implements OnInit {

  public text: string;

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
      this.text = this.route.snapshot.paramMap.get('text');
  }

  goback() {
    this.location.back();
  }

}
