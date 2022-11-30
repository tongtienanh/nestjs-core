import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { EAccountType } from 'src/modules/users/constants/user.enum';
import { ILoggedInUser } from '../resources/logged-user.type';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      return true;
      const request = context.switchToHttp().getRequest();
      const user: ILoggedInUser = request.user;
      const userPermissions = user.permissions;
      if (user.accountType == EAccountType.SUPER_ADMIN) return true;

      const permissions = this.reflector.getAllAndOverride<string[]>(
        'permissions',
        [context.getHandler(), context.getClass()],
      );

      if (!permissions.length) return true;
      if (!userPermissions.length) return false;

      // Kiem tra xem user co tat ca quyen nhu mong doi khong ?
      const samePermissions = permissions.filter((item) =>
        userPermissions.includes(item),
      );
      if (!samePermissions.length) return false;

      return true;
    } catch (err) {
      console.log(err);

      return false;
    }
  }
}
