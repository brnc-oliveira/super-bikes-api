import { BaseEntity, Entity } from 'typeorm';

@Entity({ name: 'bikes' })
export default class BikeEntity extends BaseEntity {}
