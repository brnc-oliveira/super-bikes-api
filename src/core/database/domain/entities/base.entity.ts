import {
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'Código de identificação do registro' })
  public id?: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Data de criação do registro',
    default: () => '(now())',
  })
  public createAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    comment: 'Data de atualização do registro',
    default: () => '(now())',
  })
  public updatedAt?: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    comment: 'Data de deleção do registro',
  })
  public deletedAt?: Date;
}
