import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { UserProvider } from './UserProvider';

@Entity({name:'User'})
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn({type: 'bigint',name:'id'})
    id: number;

    @Column({type:'varchar',length:255})
    username: string;

    @Column({type:'varchar',length:255})
    email: string;

    @Column({type:'text'})
    password: string;

    @OneToOne(type => UserProvider, userProvider => userProvider.userId,{nullable:true})
    //@JoinColumn({name:'id'})
    userProvider: UserProvider;
    
}