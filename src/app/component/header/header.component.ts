import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  CikisYap() {
    // remove user from local storage to log user out
    localStorage.removeItem('kullanici');
    this.router.navigate(['login']);
  }
}
