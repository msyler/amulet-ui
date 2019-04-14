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
  displayedColumns: string[] = ['id', 'item_name', 'desc', 'model_id', 'delete'];
  showDialog = false;


  constructor (private dataService: DataService) {}

  ngOnInit () {
    this.loadCatalogItems();
  }

  loadCatalogItems(){
    this.dataService.getCatalogItems().subscribe(res => {
      this.items = res;
    });
  }

  saveCatalogItem () {
    this.dataService.postCatalogItem(this.item).subscribe(res => {
      this.loadCatalogItems();
      this.item = {};
      this.showDialog = false;
    });
  }

  deleteCatalogItem(id) {
    this.dataService.deleteCatalogItem(id).subscribe(res => {
      this.loadCatalogItems();
    });
  }

  openDialog(_items, userId) {
    this.showDialog = true;
  }

  cancelDialog() {
    this.showDialog = false;
  }

}
