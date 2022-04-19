import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventService: EventsService) {}

  @Get()
  findAll(): any[] {
    return this.eventService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.eventService.findAll()[0];
  }
}
