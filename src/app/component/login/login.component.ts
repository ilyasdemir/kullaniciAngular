import { KullaniciService } from './../../services/kullanici.service';
import { Component, OnInit } from '@angular/core';
import { Kullanici } from '../../models/kullanici';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private kullaniciService: KullaniciService, private router: Router) { }

  kullanici: Kullanici;
  ngOnInit() {

  }
  GirisYap(kAdi: HTMLInputElement, sifre: HTMLInputElement) {

    console.log(kAdi.value + '--' + sifre.value);

    this.kullaniciService.girisYap(kAdi.value, sifre.value).forEach(x => {
      localStorage.setItem('kullanici', JSON.stringify(x));
      //this.kullanici = x;
    }).then(() => {
      console.log(JSON.parse(localStorage.getItem("kullanici")));
      if (JSON.parse(localStorage.getItem("kullanici")) != null)
        this.router.navigate(['wall']);
    });;
    //console.log(this.kullanici);
    //localStorage.setItem('kullanici', JSON.stringify(this.kullanici));
  }
}
