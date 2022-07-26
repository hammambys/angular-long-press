import { Component, VERSION } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Poste {
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar) {}
  postes: Poste[] = [
    { name: 'poste 1' },
    { name: 'poste 2' },
    { name: 'poste 3' },
    { name: 'poste 4' },
  ];

  setDefault() {
    this._snackBar.open('Cette poste est devenu par défaut', 'OK');
  }

  ngOnInit(): void {}
}
