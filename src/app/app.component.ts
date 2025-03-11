import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Mark as standalone
  imports: [RouterOutlet], 
  template: `<router-outlet></router-outlet>`
})
export class AppComponent { }
