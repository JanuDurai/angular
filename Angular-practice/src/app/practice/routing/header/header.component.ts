import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    router:Router=inject(Router);

    NavigateToRegister(){
      this.router.navigate(['Register']);
    }

}
