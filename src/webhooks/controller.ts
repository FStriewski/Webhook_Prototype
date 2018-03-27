import { JsonController, Delete, HttpCode, Post, Param, Get, Body, Authorized, BadRequestError, NotFoundError } from 'routing-controllers'
import { Target} from './entity'
import * as request from 'superagent'

interface HookBody {
    name: string
    active?: boolean
    events: string[]
    url: string
}

@JsonController()
export default class Webhook {

    @Get('/hooks')
        getAllURLs(){
        return Target.find()
        }

    @Post('/hooks')
    async createHook(
        @Body() body: Target
    ) {
        try {
            const newResponse = await Target.create(body)
                .save()

            //return Target.findOneById(entity.id)
        }
        catch (error) {
            return { message: error.message }
        }

    }


    // @Get('/subs')
    //     async getAllEvents(){
    //         const sub = await Subscription.find({name:'test'})
    //          if (!sub) throw new BadRequestError('No sub found')

    //         return sub.map(sub => sub.target.url)
    //     }

    // @Delete('/subs/:id')
    //      deleteEvent(
    //         @Param("id") id:number,
    //        // @Body(),
    //         event: any
    //     ){return "Deleting.."}


    // @Post('/events')
    //     async regEvent(
    //        @Body() body: object 
    //     ){
    //         try{
    //           let ev =  Subscription.create(body)
    //           return ev.save()

    //             // await request
    //             // .post()
    //         }
    //         catch(error){
    //             return {message: error.message}

    //         }
    //     }
// On event this should do a rerouting to all target EventSubscribers


}