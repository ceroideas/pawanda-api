import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, FindOperator, getRepository, Repository } from 'typeorm';
import Races from '../../../src/entities/races.entity';

import { InjectRepository } from '@nestjs/typeorm';
export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const races = await connection.getRepository(Races).save([
      {
        name: 'Pitbull',
        status: 1,
      },
      {
        name: 'Labrador Retriever',
        status: 1,
      },
      {
        name: 'German Shepherd',
        status: 1,
      },
      {
        name: 'Bulldog',
        status: 1,
      },
      {
        name: 'Golden Retriever',
        status: 1,
      },
      {
        name: 'Beagle',
        status: 1,
      },
      {
        name: 'Poodle',
        status: 1,
      },
      {
        name: 'Rottweiler',
        status: 1,
      },
      {
        name: 'Boxer',
        status: 1,
      },
      {
        name: 'Siberian Husky',
        status: 1,
      },
      {
        name: 'Doberman Pinscher',
        status: 1,
      },
      {
        name: 'Great Dane',
        status: 1,
      },
      {
        name: 'Chihuahua',
        status: 1,
      },
      {
        name: 'Dalmatian',
        status: 1,
      },
      {
        name: 'Shih Tzu',
        status: 1,
      },
      {
        name: 'Yorkshire Terrier',
        status: 1,
      },
      {
        name: 'Pomeranian',
        status: 1,
      },
      {
        name: 'Basset Hound',
        status: 1,
      },
      {
        name: 'Saint Bernard',
        status: 1,
      },
      {
        name: 'Cocker Spaniel',
        status: 1,
      },
      {
        name: 'Border Collie',
        status: 1,
      },
      {
        name: 'Australian Shepherd',
        status: 1,
      },
      {
        name: 'French Bulldog',
        status: 1,
      },
      {
        name: 'Shiba Inu',
        status: 1,
      },
    ]);
  }
}
