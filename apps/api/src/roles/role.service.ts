import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>
  ) {}

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  create(role: Role): Promise<Role> {
    return this.roleRepository.save(role);
  }
}
