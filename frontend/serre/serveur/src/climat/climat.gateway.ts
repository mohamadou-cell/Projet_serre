import { ConsoleLogger } from '@nestjs/common';
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'ws';
import { Climat, ClimatDocument } from './entities/climat.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
const port = new SerialPort({
  path: '/dev/ttyUSB0',
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  //flowControl: false,
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
 parser.on('data', console.log); 
port.write('cool');
parser.write('cool');
/* parser.drain(() => {
  console.log('echec');
}); */

@WebSocketGateway({ cors: true })
export class ClimatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  logger = new ConsoleLogger();
  fanOn = '0';
  @WebSocketServer()
  public server: Server;

  public socket: Socket;

  constructor(
    @InjectModel(Climat.name) private climatModel: Model<ClimatDocument>,
  ) {}

  // handleConnection(){}
  handleConnection(@ConnectedSocket() client: Socket) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const temperature = 30;
    const humid_sol = 20;
    const humid_serre = 50;
    const luminosite= 300;
    client.on('fanOn', (onData) => {
      //port.write(onData);
      this.fanOn = onData;
      /*port.drain((err) => {
        console.log(err);
      });*/
    });
    client.on('fanOff', (offData) => {
      this.fanOn = offData;
      //port.write(offData);
      /*port.drain((err) => {
        console.log(err);
      });*/
    });

    parser.on('data', (data) => {
      //port.write('cool');
      //console.log(data);
      port.write(this.fanOn);
      port.drain((err) => {
        //console.log(err);
      });
      this.logger.log(this.fanOn);
      const climat = {
        temperature: data.split('/')[0],
        humid_serre: data.split('/')[1],
        humid_sol:data.split('/')[2],
        luminosite:data.split('/')[3],
      };
      client.emit('connection', climat);
      const fullDate = `${day}/${month}/${year}`;
      if (hours == 8 && minutes == 0 && seconds == 0) {
        const createdClimat = new this.climatModel({
          '8h': {
            temperature: temperature,
            humidity: humid_serre,
            humid_sol:humid_sol,
            luminosite:luminosite
          },
          '12h': {
            temperature: '--',
            humidity: '--',
            humid_sol: '--',
            luminosite:'--'
          },
          '19h': {
            temperature: '--',
            humidity: '--',
            humid_sol:'--',
            luminosite:'--',
          },
          temperature: temperature,
          humidity: humid_serre,
          humid_sol:humid_sol,
          luminosite:luminosite,
          date: fullDate,
          heure: `${hours}:${minutes}:${seconds}`,
          moyenne: { temperature, humid_serre, humid_sol, luminosite },
        });
        createdClimat.save();
        client.emit('connection', 'climat 8h enregistré');
      }
      if (hours == 12 && minutes == 0 && seconds == 0) {
        this.climatModel
          .updateOne(
            { date: fullDate },
            { '12h': { temperature: temperature, humidity: humid_serre, humid_sol:humid_sol, luminosite } },
          )
          .then((data) => {
            console.log(data);
          });
        client.emit('connection', 'climat 12h enregistré');
      }
      if (hours == 19 && minutes == 0 && seconds == 0) {
        this.climatModel
          .updateOne(
            { date: fullDate },
            { '19h': { temperature: temperature, humidity: humid_serre, humid_sol:humid_sol, luminosite } },
          )
          .then((data) => {
            console.log(data);
          });
        client.emit('connection', 'climat 19h enregistré');
      }
    });
    /* client.join() */
  }

  // handleDisconnect(){}
  handleDisconnect(@ConnectedSocket() client: any) {
    client.leave();
  }

  // startMyTimer(){}

  // stopMyTimer(){}
}