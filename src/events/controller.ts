import { JsonController, Delete, HttpCode, Post, Param, Get, Body, Authorized, BadRequestError } from 'routing-controllers'
import { Events } from './entity'
import * as request from 'superagent'


@JsonController()
export default class EventController {

    @Get('/events')
        getEvents(){}

    @Post('/events')
        async postEvent(
            @Body() body: Events
        ){
            try {
            const newResponse = await Events.create(body).save()
            return newResponse
            }
            catch(error){ 
                return {message: error.message}
            }
        }

}