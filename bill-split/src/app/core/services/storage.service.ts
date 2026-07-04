import { Injectable } from '@angular/core';
import { IPerson } from '../../domain/Interfaces/iperson';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly PARTICIPANTS_KEY = 'participants';
  private readonly LAST_ID_KEY = 'participants_last_id';
  private participantsSubject = new BehaviorSubject<IPerson[]>(this.getAllUsers());
  participants$ = this.participantsSubject.asObservable();

  constructor() { }

  // =========================
  // Read
  // =========================

  getAllUsers(): IPerson[] {
    return JSON.parse(
      localStorage.getItem(this.PARTICIPANTS_KEY) ?? '[]'
    ) as IPerson[];
  }

  getUserById(id: number): IPerson | undefined {
    return this.getAllUsers().find(user => user.id === id);
  }

  // =========================
  // Create
  // =========================

  addNewUser(user: IPerson): void {

    const users = this.getAllUsers();

    user.id = this.generateId();

    users.push(user);

    this.saveUsers(users);

    this.refreshParticipants();
  }

  // =========================
  // Update
  // =========================

  updateUser(updatedUser: IPerson): boolean {

    const users = this.getAllUsers();

    const index = users.findIndex(user => user.id === updatedUser.id);

    if (index === -1) {
      return false;
    }

    users[index] = updatedUser;

    this.saveUsers(users);

    return true;
  }

  // =========================
  // Delete
  // =========================

  deleteUser(id: number): boolean {

    const users = this.getAllUsers();

    const filteredUsers = users.filter(user => user.id !== id);

    if (filteredUsers.length === users.length) {
      return false;
    }

    this.saveUsers(filteredUsers);

    this.refreshParticipants();

    return true;
  }

  // =========================
  // Utilities
  // =========================

  clearUsers(): void {
    localStorage.removeItem(this.PARTICIPANTS_KEY);
    localStorage.removeItem(this.LAST_ID_KEY);
  }

  private saveUsers(users: IPerson[]): void {
    localStorage.setItem(
      this.PARTICIPANTS_KEY,
      JSON.stringify(users)
    );
  }

  private generateId(): number {

    const lastId = Number(
      localStorage.getItem(this.LAST_ID_KEY) ?? '0'
    );

    const newId = lastId + 1;

    localStorage.setItem(
      this.LAST_ID_KEY,
      newId.toString()
    );

    return newId;
  }
  private refreshParticipants(): void {
    this.participantsSubject.next(this.getAllUsers());
  }
}
