import { Climat } from './../entities/climat.entity';

export class CreateClimatDto {
    readonly temperature ?: string;
    readonly humid_serre ?: string;
    readonly humid_sol ?: string;
    readonly luminosite ?: string;
    
}
