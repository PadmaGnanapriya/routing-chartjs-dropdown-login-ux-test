import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-chartjs-dropdown-login-ux-test';

  constructor(private router: Router) { }


  // tslint:disable-next-line:typedef
  login(){
    this.router.navigate(['/login']).then(resp => {
      location.reload();
    }).catch(error => {
      alert('Something went wrong');
    });
  }
}
