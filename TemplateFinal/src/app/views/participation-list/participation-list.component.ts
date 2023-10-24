import { Component, OnInit } from '@angular/core';
import { ParticipationService } from '../../Services/participation.service';
import { Participation } from '../../models/participation';

@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.scss']
})
export class ParticipationListComponent implements OnInit{
  participations: Participation[] = [];

  constructor(private participationService: ParticipationService) {}

  ngOnInit() {
    this.loadParticipations();
  }

  loadParticipations() {
    this.participationService.getAll().subscribe(
      (data) => {
        this.participations = data;
      },
      (error) => {
        console.error('Error loading participations: ', error);
      }
    );
  }


  deleteParticipation(id: number) {
    this.participationService.deleteParticipation(id).subscribe(
      (result) => {
        if (result) {
          // Participation deleted successfully
          this.loadParticipations(); // Refresh the list of participations
        } else {
          // Handle error
          console.error('Error deleting participation.');
        }
      },
      (error) => {
        console.error('Error deleting participation: ', error);
      }
    );
  }
}
