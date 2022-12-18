import { Column, Entity, OneToMany } from "typeorm";
import { Default } from "./Default";
import { Link } from './Link';

@Entity()
export class MonitoringRequest extends Default{

    @Column({
            unique:true,
            type:"uuid"
        })
        requestId:string

        @OneToMany(
            ()=>Link,
            link => link.request
        )
        links:Link

}