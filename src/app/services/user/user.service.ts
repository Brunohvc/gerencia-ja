import { Injectable } from '@angular/core';
import sqlite3 from 'sqlite3';//.verbose();
// const sql = sqlite3

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  login(username, password) {
    // sqlite3.
  }
}
