import { Injectable } from '@angular/core';
import { ActionTracking } from './action-tracking.model';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';
import { LocalStorageService } from '../../core/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ActionTrackingService {
  constructor(
    private storageService: LocalStorageService
  ) {
  }

  fetchAll(): Observable<ActionTracking[]> {
    const data = this.storageService.getItem('ActionTracking') || [];
    return of(data.sort((a, b) => {
      return moment(b.lastModified).diff(moment(a.lastModified));
    }));
  }

  fetch = id => {
    const data = this.storageService.getItem('ActionTracking') || [];
    return of(data.find(x => x.id === id));
  }

  add(item: ActionTracking): Observable<any> {
    const insertItem = { ...item };
    insertItem.id = moment().format('YYYYMMddHHmmsszzz');
    const data = this.storageService.getItem('ActionTracking') || [];
    data.push(insertItem);
    this.storageService.setItem('ActionTracking', data);
    console.log('1', this.storageService.getItem('ActionTracking'));
    return of(insertItem);
  }

  update(item: ActionTracking): Observable<any> {
    const data = this.storageService.getItem('ActionTracking') || [];
    let updateItem = data.find(x => x.id === item.id);
    if (!updateItem) {
      return of({ value: false });
    }
    updateItem.name = item.name;
    updateItem.lastModified = item.lastModified;
    this.storageService.setItem('ActionTracking', data);
    return of(updateItem);
  }

  delete(id: string): Observable<any> {
    const data = this.storageService.getItem('ActionTracking') || [];
    if (data.some(x => x.id === id)) {
      const idx = data.findIndex(x => x.id === id);
      data.splice(idx, 1);
      this.storageService.setItem('ActionTracking', data);
    }
    return of({ value: true });
  }

}
