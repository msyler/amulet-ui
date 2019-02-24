import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
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
export class AppComponent implements OnInit {
  
  items = [];

  displayedColumns: string[] = ['id', 'name', 'desc', 'lat', 'lng'];

  constructor (private dataService: DataService) {}

  ngOnInit () {
    this.dataService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  alert (msg) {
    console.log(msg);
  }
}
