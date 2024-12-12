import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';
  listOfItems = [
    {
      img: 'https://via.placeholder.com/150',
      title: 'Item 1',
      description: 'This is the description for item 1. It provides some details about the item.'
    },

  ]
  add = () => {
    this.listOfItems.push({
      img: 'https://via.placeholder.com/150',
      title: 'Item 3',
      description: 'This is the description for item 3. It provides some insight into the item.'
    })
    console.log(this.listOfItems)
  }
}
