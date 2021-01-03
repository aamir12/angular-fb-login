import { Component, OnInit } from '@angular/core';
import { FBLoginService } from './fblogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private fbLogin: FBLoginService) {}
  ngOnInit() {
    this.fbLogin.init();
  }

  loggedIn = false;
  user: any = {};
  async signInWithFB() {
    const data = await this.fbLogin.login();
    if (data) {
      this.loggedIn = true;
      console.log(data);
      this.user = data;
    }
  }
}
