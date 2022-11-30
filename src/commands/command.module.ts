import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './../database/entities/role/role.entity';
import { RolePermission } from './../database/entities/role/role-permissions.entity';
import { Module } from '@nestjs/common';
import { GenerateRolePermissionCommand } from './role-permission/generate-role.command';
import { ModulePermission } from './../database/entities/role/module.entity';
import { Permission } from './../database/entities/role/permission.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Role, RolePermission, ModulePermission, Permission]),
  ],
  providers: [GenerateRolePermissionCommand],
})
export class CommandModule {}
