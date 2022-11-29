import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './../database/entities/role/role.entity';
import { RolePermission } from './../database/entities/role/role-permissions.entity';
import { Module } from '@nestjs/common';
import { GenerateRolePermissionCommand } from './role-permission/generate-role.command';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RolePermission])],
  providers: [GenerateRolePermissionCommand],
})

export class CommandModule {}
