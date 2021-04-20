import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.sass']
})
export class PhotoDisplayComponent {

  @Input()
  public photo: Photo | null = null;

  @Output()
  public savePhoto = new EventEmitter<Photo>();

  public triggerPhotoSave(): void {
    if (this.photo) {
      this.savePhoto.emit(this.photo);
    }
  }
}
