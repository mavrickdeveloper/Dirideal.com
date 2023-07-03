import { Controller, Get , Post , Body } from '@nestjs/common';

@Controller('dirideal')
export class DiridealController {

// return a user array list
    @Get('getUser')
    getUser() {
      return [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ];
    }
  
    @Get('getItems')
    getItems() {
      return [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ];
    }
  
    @Get('getStaticName')
    getStaticName() {
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    }
  
    @Get('getFibonacci')
    getFibonacci() {
      // This function will calculate the first 10 numbers of the Fibonacci sequence
      let sequence = [0, 1];
      for(let i=2; i<10; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
      }
      return sequence;
    }

    @Post('postData')
    postData(@Body() data: any) {
      return data;
    }


}
