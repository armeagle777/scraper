import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Default } from './Default';
import { MonitoringRequest } from './MonitoringRequest';


@Entity()
export class Link extends Default{

    @Column({
        type:"uuid",
        unique:true
    })
    linkId:string

    @Column()
    href:string

    @Column()
    text:string

    @Column()
    status:number

    @ManyToOne(
        ()=>MonitoringRequest,
        request =>request.links
    )

    @JoinColumn({
        name:'request_id'
    })
    request:MonitoringRequest
}