import { Component } from '@angular/core';
import { ParticipationService } from '../../Services/participation.service';
import { Participation } from '../../models/participation';

@Component({
  selector: 'app-participation-add',
  templateUrl: './participation-add.component.html',
  styleUrls: ['./participation-add.component.scss']
})
export class ParticipationAddComponent {
  newParticipation: Participation = {
    id: 0,
    payment: 0,
    date: '',
    Description: '',
    events: 0,
  };

  constructor(private participationService: ParticipationService) {}

  addParticipation() {
    this.participationService.addParticipation(this.newParticipation).subscribe(
      (result) => {
        if (result) {
          // Participation added successfully
          // You can navigate to the participation list or perform other actions
        } else {
          // Handle error
          console.error('Error adding participation.');
        }
      },
      (error) => {
        console.error('Error adding participation: ', error);
      }
    );
  }

}
