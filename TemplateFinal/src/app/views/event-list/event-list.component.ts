import { Component, OnInit } from '@angular/core';
import { EventService } from '../../Services/event.service';
import { Events } from '../../models/event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Events[] = [];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error loading events: ', error);
      }
    );
  }

  editEvent(id: number) {
    // You can implement the edit functionality here
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe(
      (result) => {
        if (result) {
          // Event deleted successfully
          this.loadEvents(); // Refresh the list of events
        } else {
          // Handle error
          console.error('Error deleting event.');
        }
      },
      (error) => {
        console.error('Error deleting event: ', error);
      }
    );
  }
}
