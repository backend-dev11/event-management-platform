// event.dto.ts

import { IsNotEmpty, IsString, IsEmail, IsDate, IsObject, IsDateString, IsOptional } from 'class-validator';

class LocationDto {
    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    zip: string;
}

export class CreateEventDto {
    @IsOptional()
    @IsString()
    id?: string;

    @IsNotEmpty()
    @IsString()
    eventName: string;

    @IsNotEmpty()
    @IsDateString()
    eventDate: Date;

    @IsNotEmpty()
    @IsString()
    organizer: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsObject()
    location: LocationDto;

    @IsNotEmpty()
    @IsDateString()
    createdAt: Date;

    @IsNotEmpty()
    @IsDateString()
    updatedAt: Date;
}
