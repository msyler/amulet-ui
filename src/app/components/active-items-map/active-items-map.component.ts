import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-active-items-map',
  templateUrl: './active-items-map.component.html',
  styleUrls: ['./active-items-map.component.scss']
})
export class ActiveItemsMapComponent implements OnInit {

  items = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadActiveItems();
  }

  loadActiveItems(){
    this.dataService.getActiveItems().subscribe(res => {
      this.items = res;
    });
  }
}
