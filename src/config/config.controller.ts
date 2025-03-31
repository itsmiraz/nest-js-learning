import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/config.dto';

@Controller('config')
export class ConfigController {
  constructor(private configServices: ConfigService) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return this.configServices.findAll();
  }

  @Get('featured')
  findFeatured() {
    return this.configServices.findFeatured();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    return this.configServices.findOne(id);
  }

  @Post()
  create(@Body() input: CreateConfigDto) {
    console.log(input);
    return this.configServices.create(input);
  }
}
