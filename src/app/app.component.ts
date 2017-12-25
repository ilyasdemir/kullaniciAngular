import { Router } from '@angular/router';
import { Kullanici } from './models/kullanici';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) { }
  kullanici: Kullanici;
  kullaniciYok: boolean = true;
  ngOnInit() {
    this.kullanici = JSON.parse(localStorage.getItem("kullanici"));
    if (this.kullanici == null) {
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['wall']);
    }
  }
}
