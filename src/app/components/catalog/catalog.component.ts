import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items = [];

  displayedColumns: string[] = ['id', 'name', 'desc', 'lat', 'lng'];

  constructor (private dataService: DataService) {}

  ngOnInit () {
    this.dataService.getItems().subscribe(res => {
      this.items = res;
    });
  }

}
