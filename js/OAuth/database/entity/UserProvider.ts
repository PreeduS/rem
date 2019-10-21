import { Entity, Column, BaseEntity, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { User } from './User'

@Entity({name:'UserProvider'})
export class UserProvider extends BaseEntity{

    @PrimaryColumn({type: 'bigint',name:'userId'})
    userId: number;

    @OneToOne(type => User, user => user.id, {nullable:true})
    @JoinColumn({name:'userId'})
    user: User;

    @Column({type:'varchar',length:255})
    providerId: string;

    @Column({type:'varchar',length:255})
    providerType: string;




}