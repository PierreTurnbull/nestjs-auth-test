import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @Get()
  root() {
    return 'ScorecastAPI v1.0.0';
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() request): Promise<any> {
    return request.user;
  }
}
