import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

 

  @Get('profile-user')
  @UseGuards(new JwtAuthGuard('user'))
  getProfileUser(@Request() req) {
    return req.user;
  }

  @Get('profile-admin')
  @UseGuards(new JwtAuthGuard('admin'))
  getProfileAdmin(@Request() req) {
    return req.user;
  }

}