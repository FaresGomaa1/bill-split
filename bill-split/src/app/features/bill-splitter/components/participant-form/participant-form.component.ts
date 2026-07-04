import { Component } from '@angular/core';
import { Person } from '../../../../domain/models/person.model';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent {
  participantName:string = '';
  constructor(private storageService: StorageService) { }
  addParticipant(): void {

    if (!this.participantName.trim()) {
      return;
    }

    const newParticipant = new Person(
      this.participantName.trim(),
      0
    );

    this.storageService.addNewUser(newParticipant);

    // Clear the textbox
    this.participantName = '';
  }

}
