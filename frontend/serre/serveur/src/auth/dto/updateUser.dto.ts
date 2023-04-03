import {
    PartialType
  } from '@nestjs/mapped-types';
  import {
    createEmployeeDto
  } from './createUser.dto';
  
  export class UpdateEmployeeDto extends PartialType(createEmployeeDto) {}