import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

    ITEMS: Item[] = [
    {
        name:'Item 1',
        value:'item_1'
     },
     {
         name:'Item 2',
         value:'item_2'
      },
      {
          name:'Item 3',
          value:'item_3'
       },
       {
           name:'Item 4',
           value:'item_4'
        },
        {
            name:'Item 5',
            value:'item_5'
         }
  ];
  title = 'online-test-application';
  itemsList: Item[] = this.ITEMS;
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  onItemChange(item : Item) {
    console.log(item);
    
  }
}
