import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransfertService {

  private adminID = new BehaviorSubject<number>(-1);
  currentInfo = this.adminID.asObservable();

  constructor() { }

  sendData(data: number) {
    this.adminID.next(data);
  }
}
