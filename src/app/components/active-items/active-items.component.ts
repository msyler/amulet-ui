import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-active-items',
  templateUrl: './active-items.component.html',
  styleUrls: ['./active-items.component.scss']
})
export class ActiveItemsComponent implements OnInit {
  items = [];

  displayedColumns: string[] = ['id', 'name', 'desc', 'lat', 'lng'];

  constructor (private dataService: DataService) {}

  ngOnInit () {
    this.dataService.getItems().subscribe(res => {
      this.items = res;
    });
  }


}
