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
  editedEvent!: Events;
  eventId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventService
  ) {}


  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.eventId = +id; // Get the event ID from the route
        this.loadEvent();
      }
    });
  }

  loadEvent() {
    this.eventsService.getEvent(this.eventId).subscribe(
      (data) => {
        this.editedEvent = data;
      },
      (error) => {
        console.error('Error loading event: ', error);
      }
    );
  }



  updateEvent() {
    this.eventsService.update(this.editedEvent).subscribe(
      (result) => {
        if (result) {
          // Event updated successfully
          alert('Event details updated successfully.');
          this.router.navigate(['/admin/events']); // Redirect to the event list
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
