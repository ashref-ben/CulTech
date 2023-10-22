import { Component } from '@angular/core';
import { EventService } from '../../Services/event.service';
import { Events } from '../../models/event';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent {
  newEvent: Events = {
    id: 0,
    Title: '',
    Description: '',
    Date: '',
    region: '',
    Picture: '',
    Category: '',
  };

  constructor(private eventService: EventService) {}

  addEvent() {
    this.eventService.addEvent(this.newEvent).subscribe(
      (result) => {
        if (result) {
          // Event added successfully
          // You can navigate to the event list or perform other actions
        } else {
          // Handle error
          console.error('Error adding event.');
        }
      },
      (error) => {
        console.error('Error adding event: ', error);
      }
    );
  }
}
