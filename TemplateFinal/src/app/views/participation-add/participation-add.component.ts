import { Component } from '@angular/core';
import { EventService } from '../../Services/event.service';
import { Events } from '../../models/event';
import { ParticipationService } from '../../Services/participation.service';
import { Participation } from '../../models/participation';

@Component({
  selector: 'app-participation-add',
  templateUrl: './participation-add.component.html',
  styleUrls: ['./participation-add.component.scss']
})
export class ParticipationAddComponent {
  events: Events[] = [];

  constructor(
    private eventsService: EventService,
    private participationService: ParticipationService
  ) {}

  ngOnInit() {
    this.loadEventsFromToday();
  }

  loadEventsFromToday() {
    this.eventsService.geteventsfromtoday().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error loading events: ', error);
      }
    );
  }

  participateInEvent(event: Events) {
    const confirmation = window.confirm(
      `Are you sure you want to participate in "${event.Title}"?`
    );

    if (confirmation) {
      const participation: Participation = {
        id: 0, // Auto-generated by the server
        payment: event.Price, // Set the payment as the event's price
        Description: event.Description,
        date:"",
        user:Number(localStorage.getItem('id')), /* Set the user ID here */ // You need to set the user ID
        events: event.id, // Set the event ID
      };

      this.participationService.addParticipation(participation).subscribe(
        (result) => {
          if (result) {
            // Participation added successfully
            alert('You have successfully participated in the event.');
            // You may want to refresh the event list or the participation list here.
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
}
