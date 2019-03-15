import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  items = [];
  activeItems = [];
  activeItemsSuggestions = [];
  selectedActiveItem = {};
  currentUserId = "";
  showDialog = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    
    this.getUsersWithItems();  

    this.dataService.getActiveItems().subscribe(res => {
      this.activeItems = res;
    });
  }

  getUsersWithItems() {
    this.dataService.getUsers({"include": "item-actives"}).subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

  openDialog(_items, userId) {
    this.showDialog = true;
    this.items = _items; 
    this.currentUserId = userId;
  }

  search(event) {
    this.activeItemsSuggestions = this.activeItems.filter(option => option['item_name'].toLowerCase().includes(event.query));
  }

  assignItem (itemToAssign) {
    
    itemToAssign['tempUserId'] = this.currentUserId;

    this.dataService.updateActiveItem(itemToAssign).subscribe(res => {
      console.log(res);
      this.getUsersWithItems();  
      this.items.push(itemToAssign);
    });
  }

  releaseItem (itemToAssign) {

    console.log(itemToAssign);

    itemToAssign['tempUserId'] = "";

    this.dataService.updateActiveItem(itemToAssign).subscribe(res => {
      this.getUsersWithItems();  
    });
  }

}
