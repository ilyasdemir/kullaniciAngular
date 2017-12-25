import { Component, OnInit } from '@angular/core';

import { KullaniciService } from '../../services/kullanici.service';
import { Kullanici } from '../../models/kullanici';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  constructor(private kullaniciService: KullaniciService) { }

  kullanicilar: Kullanici[];
  ngOnInit() {
     this.kullaniciService.getKullanicilar().forEach(x=>{
      this.kullanicilar=x;
    });
  }

}
