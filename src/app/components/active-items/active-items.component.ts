import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-active-items',
  templateUrl: './active-items.component.html',
  styleUrls: ['./active-items.component.scss']
})
export class ActiveItemsComponent implements OnInit {
  items = [];
  catalogItems = [];
  catalogSuggestions = [];
  selectedCatalogItem: any = {};
  location = "";
  

  displayedColumns: string[] = ['id', 'name', 'desc', 'lat', 'lng', 'delete'];

  constructor (private dataService: DataService) {}

  ngOnInit () {
    this.loadActiveItems();
    this.getCatalogItems();
  }


  loadActiveItems(){
    this.dataService.getActiveItems().subscribe(res => {
      this.items = res;
    });
  }

  deleteActiveItem(id) {
    this.dataService.deleteActiveItem(id).subscribe(res => {
      this.loadActiveItems();
    });
  }

  getCatalogItems(){
    this.dataService.getCatalogItems().subscribe(res => {
      this.catalogItems = res;
    });
  }

 

  search(event) {
    this.catalogSuggestions = this.catalogItems.filter(option => option['item_name'].toLowerCase().includes(event.query));
  }

  saveActiveItem () {

    let latLng = this.location.split(',');
    let lat = latLng[0].trim();
    let lng = latLng[1].trim();

    console.log(this.selectedCatalogItem);
    console.log(lat, lng);

    let object = {
      "item_name": this.selectedCatalogItem.item_name,
      "desc": this.selectedCatalogItem.desc,
      "location": {
        "lat": lat,
        "lng": lng
      },
      "model_id": this.selectedCatalogItem.model_id,
      "current_owner": ""
    }

    this.dataService.addActiveItem(object).subscribe(res => {
      console.log(res);
      this.loadActiveItems();
    });
  }
}
