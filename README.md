# Angular (2+, AngularTS) Drag and Drop example

To have drag n drop. All you need is HTML DOM events.

## How to:

Make the HTML element draggable:

```
<li draggable="true"></li>
```

Save your item on drag start.

```
<li (dragstart)="dragStart($event, item)" draggable="true"></li>
```

```
  dragStart(event, item) {
    event.dataTransfer.setData('item', JSON.stringify(item));
  }
```

Create a dropzone by preventing `dragover` propagation:

```
<div (dragover)="dragOver($event)">
</div>
```

Subscribe to the drop event:

```
<div (drop)="drop($event)" (dragover)="dragOver($event)">
</div>
```

```
  drop(e) {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData('item'));
  }
```

Done!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
