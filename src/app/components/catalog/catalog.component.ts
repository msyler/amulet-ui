import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {


  item = {};

  items = [];

  displayedColumns: string[] = ['id', 'item_name', 'desc', 'model_id'];

  constructor (private dataService: DataService) {}

  ngOnInit () {
    this.dataService.getCatalogItems().subscribe(res => {
      this.items = res;
    });
  }

  saveCatalogItem () {
    this.dataService.postCatalogItem(this.item).subscribe(res => {
      console.log('Item created!');
    });
  }

}
