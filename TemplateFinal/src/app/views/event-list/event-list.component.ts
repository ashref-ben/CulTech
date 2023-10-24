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

  constructor(private eventsService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventsService.getAll().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error loading events: ', error);
      }
    );
  }

  deleteEvent(eventId: number) {
    this.eventsService.delete(eventId).subscribe(
      () => {
        this.loadEvents();
      },
      (error) => {
        console.error('Error deleting event: ', error);
      }
    );
  }
}
