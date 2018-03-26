import { JsonController, HttpCode, Post, Param, Get, Body, Authorized, BadRequestError } from 'routing-controllers'
import {Target, Subscription} from './entities'
// import { request } from 'http';
import * as request from 'superagent'


@JsonController()
export default class Webhook {

    @Get('/target')
        getAllURLs(){
            return Target.find()
        }

    @Get('/subs')
        async getAllEvents(){
            const sub = await Subscription.find({name:'test'})
             if (!sub) throw new BadRequestError('No sub found')

            return sub.map(sub => sub.target.url)
        }

    @Post('/events')
        async regEvent(
           @Body() body: object 
        ){
            try{
              let ev =  Subscription.create(body)
              return ev.save()

                // await request
                // .post()
            }
            catch(error){
                return {message: error.message}

            }
        }
// On event this should do a rerouting to all target EventSubscribers
    @Post('/target')
        async regTarget(
            @Body() body: Target
        ){
            try{
               // console.log(body)
                const entity = await Target.create(body).save()
               
                await Subscription.create({
                    name: 'test',
                    target: entity
                }).save()

                return Target.findOneById(entity.id)
            }
            catch(error){
                return {message: error.message}
            }
            
        }

}