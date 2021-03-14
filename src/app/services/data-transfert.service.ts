import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransfertService {

  private adminID = new BehaviorSubject<any>([]);
  currentInfo = this.adminID.asObservable();

  constructor() { }

  sendData(data: number) {
    this.adminID.next(data);
  }
}
