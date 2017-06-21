import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h3>Drag these guys: </h3>
              <div class="drag-area">
                <ul>
                  <li *ngFor="let item of dragItems"
                      (dragstart)="dragStart($event, item)"
                      draggable="true"
                      class="item">{{item.name}}
                  </li>
                </ul>
              </div>

              <h3>Over here 👇: </h3>
              <div (drop)="drop($event)" (dragover)="dragOver($event)" class="drop-area">
                <ul>
                  <li *ngFor="let item of draggedItems" class="item">
                    {{item.name}}
                  </li>
                </ul>
              </div>
            `,
  styles:   [
    '.drop-area { height: 200px; width: 200px; background-color: aqua}',
    '.drag-area { height: 200px; width: 200px; background-color: beige}',
    '.item {  background-color: blueviolet }',
  ]
})
export class AppComponent {
  dragItems = [
    {name: '☕️', id: 1},
    {name: '💩', id: 2},
    {name: '🐟', id: 3}
  ];

  draggedItems = [];

  dragOver(e) {
    // Needs to be prevented in order for the browser to know its a valid dropzone:
    // https://stackoverflow.com/a/35136914/1079609
    e.preventDefault();
  }

  dragStart(event, item) {
    event.dataTransfer.setData('item', JSON.stringify(item));
    console.log('Started dragging: ', item);
  }

  drop(e) {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData('item'));
    this.switchItem(item);
    console.log('Dropped: ', item);
  }

  private switchItem(item) {
    this.dragItems    = this.dragItems.filter(x => x.id !== item.id);
    this.draggedItems = this.draggedItems.concat([item]);
  }
}
