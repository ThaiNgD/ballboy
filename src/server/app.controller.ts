import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { toArray } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  @Render('index')
  home() {
    console.log(this.appService.getBlogPosts());
    return this.appService.getBlogPosts().pipe(toArray());
  }
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  @Render('[id]')
  public blogPost(@Param('id') id: string) {
    return { id };
  }

  @Get('/api/blog-posts')
  public listBlogPosts() {
    return this.appService.getBlogPosts();
  }

  @Get('/api/blog-posts/:id')
  public getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getBlogPostByID(id);
  }
}
