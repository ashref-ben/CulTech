import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../Services/event.service';
import { Events } from '../../models/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent {
  selectedEvent: Events = {
    id: 0,
    Title: '',
    Description: '',
    Date: '',
    region: '',
    Picture: '',
    Category: '',
  };

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // Convert the id parameter to a number
    this.eventService.getEventById(id).subscribe(
      (data) => {
        this.selectedEvent = data;
      },
      (error) => {
        console.error('Error loading event: ', error);
      }
    );
  }

  updateEvent() {
    this.eventService.updateEvent(this.selectedEvent).subscribe(
      (result) => {
        if (result) {
          // Event updated successfully
          this.router.navigate(['/events']); // Navigate back to the event list
        } else {
          // Handle error
          console.error('Error updating event.');
        }
      },
      (error) => {
        console.error('Error updating event: ', error);
      }
    );
  }
}
