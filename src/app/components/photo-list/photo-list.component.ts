import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass']
})
export class PhotoListComponent {

  @Input()
  public photos: Photo[] = [];

  @Input()
  public favoritePage: boolean = false;

  @Output()
  public focusPhoto = new EventEmitter<Photo>();

  @Output()
  public markRemove = new EventEmitter<Photo[]>();

  public photoClick(event: Event, photo: Photo): void {
    event.preventDefault();
    if (photo) {
      this.focusPhoto.emit(photo);
    }
  }

  public photoDelte(photo: Photo): void {
    this.markRemove.emit(this.photos.filter(photoItem => photoItem.id !== photo.id));
  }

}
