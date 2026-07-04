import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../core/services/storage.service';
import { IPerson } from '../../../../domain/Interfaces/iperson';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participantList: IPerson[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.participants$.subscribe(users => {
      this.participantList = users;
    });
  }
  loadParticipants(): void {
    this.participantList = this.storageService.getAllUsers();
  }
  removeParticipant(participant: IPerson): void {
    this.storageService.deleteUser(participant.id);
  }
}
