import { PhotoService } from './../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { environment } from 'src/environments/environment';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  photos: any[] = [];

  constructor(public photoService: PhotoService) {
    this.photos = this.photoService.photos;
  }

  ngOnInit() {
    defineCustomElements(window);

    if (environment.production) {
      enableProdMode();
    }
  }

  takePhoto() {
    this.photoService.addPhoto();
  }
}
