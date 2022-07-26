import { Component, VERSION } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Poste {
  id: any;
  name: string;
  isDefault: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar) {}
  durationInSeconds = 2;

  postes: Poste[] = [
    { id: 0, name: 'poste 1', isDefault: false },
    { id: 1, name: 'poste 2', isDefault: true },
    { id: 2, name: 'poste 3', isDefault: false },
    { id: 3, name: 'poste 4', isDefault: false },
  ];

  setDefault(id: any) {
    for (let x in this.postes) {
      if (this.postes[x].id == id) {
        this.postes[x].isDefault = true;
      } else {
        this.postes[x].isDefault = false;
      }
    }

    this._snackBar.open('Cette poste est devenu par défaut', 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {}
}
