import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(request: any) {
    const { authorization } = request.headers;
    if (!authorization) return false;
    const [type, token] = authorization.split(' ');
    if (type !== 'Bearer') return false;
    try {
      const result = this.jwtService.verify(token);
      console.log(result);
      request.user = result.userId;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
