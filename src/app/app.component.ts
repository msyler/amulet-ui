import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
    mgl-map {
      height: 100%;
      width: 100%;
    }
  `]
})
export class AppComponent {
  title = 'amulet-ui';
}
