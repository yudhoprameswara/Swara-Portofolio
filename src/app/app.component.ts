import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoadingComponent } from "./loading/loading.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ContactComponent, RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading: boolean = true;
  phoneRinging: boolean = true;

 onPhone(){
  this.phoneRinging = !this.phoneRinging
 }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        
        this.isLoading = true;
        
      }
    });
  }
}

