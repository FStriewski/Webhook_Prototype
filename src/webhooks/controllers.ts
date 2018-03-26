import { JsonController, HttpCode, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import {TargetURL, EventSubscription} from './entities'


@JsonController()
export default class Webhook {

    @Get('./TargetURL')
        getAllURLs(){
            return TargetURL.find()
        }

    @Get('./EventSubscription')
        getAllEvents(){
            return EventSubscription.find()
        }

}