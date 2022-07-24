import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {
    private rolePassed : string;
    constructor(role : string) {
      super();
      this.rolePassed =role;
    }

    canActivate(context: ExecutionContext) {
      // Add your custom authentication logic here
      // for example, call super.logIn(request) to establish a session.
      const ctx=context.switchToHttp();
      const request :any =ctx.getRequest<Request>();
      console.log(request,'ok lool');
      return super.canActivate(context);
    }
  
    handleRequest(err, user, info) {
        console.log(err,user,info,'why',this.rolePassed)
      // You can throw an exception based on either "info" or "err" arguments
      if (err || !user || user.role !=this.rolePassed) {
        throw err || new UnauthorizedException();
      }
      return user;
    }
  }