import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { PermissionGuard } from './../guards/permission.guard';
import { JwtAuthGuard } from './../guards/jwt-auth.guard';

export const Permission = (...permission: string[]) => 
    applyDecorators(SetMetadata("permission", permission), UseGuards(JwtAuthGuard, PermissionGuard))