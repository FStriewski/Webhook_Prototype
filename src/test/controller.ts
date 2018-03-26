import { JsonController, HttpCode, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import Test from './entities';
import * as request from 'superagent'

@JsonController()
export default class TestController {

    @Post('/tests')
    //@HttpCode(201)
    async test(
        @Body() body: object
    ) {
        try {    
           const bodyObj = await request
            .post('http://postb.in/u4XHiyp5')
            .send( body)
            .then(res => res.body)
            //return body.save()
            console.log(bodyObj)
            return { message: 'All went well' }
        }
        catch  (err) {
            return { message: err.message }//, err.response
        };

    }

    @Get('/tests')
    allTests() {
        return Test.find()
    }

}

