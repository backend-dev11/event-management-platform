import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  /**
   * this is function is used to create Event in Event Entity.
   * @param createEventDto CreateEventDto
   * @returns 
   */
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.createEvent(createEventDto);
  }

  /**
   * this function is used to get all the event's list
   * @returns 
   */
  @Get()
  getAllEvent(@Query('eventName') eventName?: string) {
    return this.eventService.getAllEvent(eventName);
  }

  /**
   * this function used to get data of event whose id is passed in parameter
   * @param id string
   * @returns 
   */
  @Get(':id')
  getEvent(@Param('id') id: string) {
    return this.eventService.getEvent(id);
  }

  /**
   * this function is used to updated specific event whose id is passed in
   * parameter along with passed updated data
   * @param id string
   * @param updateEventDto UpdateEventDto
   * @returns 
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.updateEvent(id, updateEventDto);
  }

  /**
   * this function is used to remove or delete event from database.
   * @param id string
   * @returns 
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.removeEvent(id);
  }
}
