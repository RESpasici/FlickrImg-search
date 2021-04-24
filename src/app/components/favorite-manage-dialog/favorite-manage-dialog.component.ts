import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoriteList } from 'src/app/models/favorite-list';

@Component({
  selector: 'app-favorite-manage-dialog',
  templateUrl: './favorite-manage-dialog.component.html',
  styleUrls: ['./favorite-manage-dialog.component.sass']
})
export class FavoriteManageDialogComponent {
  public title: string;
  public listName: string | undefined;
  public listDescription: string | undefined;

  constructor(
    private dialogRef: MatDialogRef<FavoriteManageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FavoriteList | undefined
  ) {
    if (data) {
      this.title = "Edit list";
      this.listName = data.name;
      this.listDescription = data.description;
    }
    else {
      this.title = "New list";
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  preventClose(): boolean {
    return !(!!this.listName && !!this.listDescription);
  }

  onClose() {
    if (this.data) {
      const editedList = { ...this.data, name: this.listName, description: this.listDescription };
      return editedList;
    }
    const newList: FavoriteList = { name: this.listName!, description: this.listDescription!, photos: [] };
    return newList;
  }

}
