import {
    PartialType
  } from '@nestjs/mapped-types';
  import {
    update_user
  } from './update.entity';
  
  export class createEmployeeDto extends PartialType(update_user) {}