import { InjectRepository } from '@nestjs/typeorm';
import { Command, CommandRunner } from 'nest-commander';
import { CoreLoggerService } from './../../modules/common/services/logger/base-logger.service';
import { Role } from './../../database/entities/role/role.entity';
import { Repository } from 'typeorm';
import { RolePermission } from './../../database/entities/role/role-permissions.entity';

@Command({ name: 'generate-role', description: 'role' })
export class GenerateRolePermissionCommand extends CommandRunner {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(RolePermission)
    private rolePermissionRepository: Repository<RolePermission>,
    ) {
        super()
    }
    private readonly logger = new CoreLoggerService(GenerateRolePermissionCommand.name, true)
  async run(): Promise<void> {
      this.logger.color("hello aaaaaa")
  }

}