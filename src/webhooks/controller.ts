import { JsonController, HttpCode, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import {Target, EventSubscription} from './entities'
// import { request } from 'http';
import * as request from 'superagent'


@JsonController()
export default class Webhook {

    @Get('/target')
        getAllURLs(){
            return Target.find()
        }

    @Get('/events')
        getAllEvents(){
            return EventSubscription.find()
        }

    @Post('/events')
        async regEvent(
           @Body() body: object 
        ){
            try{
              let ev =  EventSubscription.create(body)
              return ev.save()

                // await request
                // .post()
            }
            catch(error){
                return {message: error.message}

            }
        }

    @Post('/target')
        async regTarget(
            @Body() body: object
        ){
            try{
                let target = Target.create(body)
                return target.save()
            }
            catch(error){
                return {message: error.message}
            }
            
        }

}