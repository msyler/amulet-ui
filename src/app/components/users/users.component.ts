import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { getInjectorIndex } from '@angular/core/src/render3/di';

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
      //reaload dialog items from database (just in case the dialog is open)
      this.users.forEach((_user) => {
        if(_user.id === this.currentUserId){
          this.items = _user['item-actives'];
        }
      });
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

  //Assign item to user and reload data
  assignItem (itemToAssign) {
    itemToAssign['tempUserId'] = this.currentUserId;
    this.dataService.updateActiveItem(itemToAssign).subscribe(res => {
      this.getUsersWithItems();  
      this.items.push(itemToAssign);
    });
  }

  //Remove item from user and reload data
  releaseItem (itemToRelease) {
    itemToRelease['tempUserId'] = "";
    this.dataService.updateActiveItem(itemToRelease).subscribe(res => {
      this.getUsersWithItems();  
    });
  }

}
