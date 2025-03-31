/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Config } from './entity/config.entity';
import { randomUUID } from 'crypto';
import { CreateConfigDto } from './dto/config.dto';

@Injectable()
export class ConfigService {
  private configs: Config[] = [];

  async findAll(sort: 'asc' | 'desc' = 'asc') {
    const sortAsc = (a: Config, b: Config) => (a.name > b.name ? 1 : -1);
    const sortDesc = (a: Config, b: Config) => (a.name < b.name ? 1 : -1);

    return sort === 'asc'
      ? this.configs.sort(sortAsc)
      : this.configs.sort(sortDesc);
  }

  async findFeatured() {
    return this.configs.filter((item) => item.featured);
  }

  async findOne(id: string) {
    return this.configs.find((item) => item.id === id);
  }
  async create(createConfig: CreateConfigDto) {
    const newConfig = { ...createConfig, id: randomUUID() };
    this.configs.push(newConfig);
    return newConfig;
  }
}
