import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {

  constructor(
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
  ) {}

 
   /**
   * this is function is used to create Event in Event Entity.
   * @param createUserDto this will type of createEvent Dto in which
   * @returns
   */
  createEvent(createEventDto: CreateEventDto): Promise<Event> {
    const event: Event = new Event();
    event.eventName = createEventDto.eventName;
    event.eventDate = createEventDto.eventDate;
    event.organizer = createEventDto.organizer;
    event.email = createEventDto.email;
    event.phone = createEventDto.phone;
    event.location = createEventDto.location;
    return this.eventRepository.save(event);
  }


  /**
   * this function is used to get all the event's list
   * @returns
   */
  getAllEvent(eventName?:string) : Promise<Event[]> {
    const query = this.eventRepository.createQueryBuilder('event');

    if (eventName) {
      query.where('event.eventName LIKE :eventName', { eventName: `%${eventName}%` });
    }

    return query.getMany();
  }

  /**
   * this function used to get data of event whose id is passed in parameter
   * @param id string
   * @returns
   */
  getEvent(id: string) {
    return this.eventRepository.findOneBy({ id });
  }



   /**
   * this function is used to updated specific event whose id is passed in
   * parameter along with passed updated data
   * @param id string.
   * @param UpdateEventDto this is partial type of createEventDto.
   * @returns
   */
  updateEvent(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    const event: Event = new Event();
    event.eventName = updateEventDto.eventName;
    event.eventDate = updateEventDto.eventDate;
    event.email = updateEventDto.email;
    event.organizer = updateEventDto.organizer;
    event.phone = updateEventDto.phone;
    event.location = updateEventDto.location;
    event.id = id;
    return this.eventRepository.save(event);
  }

  /**
   * this function is used to remove or delete event from database.
   * @param id is the type of number, which represent id of event
   * @returns
   */
  removeEvent(id: string): Promise<{ affected?: number }> {
    return this.eventRepository.delete(id);
  }
}
