import { Injectable, NotFoundException } from '@nestjs/common';
import { from, of, toArray } from 'rxjs';

const BLOG_POSTS = [
  { title: 'Lorem Ipsum', id: 1 },
  { title: 'Dolore Sit', id: 2 },
  { title: 'Ame', id: 3 },
];
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBlogPosts() {
    return from(BLOG_POSTS).pipe(toArray());
  }

  getBlogPostByID(postId: number) {
    const blogPost = BLOG_POSTS.find(({ id }) => id === postId);

    if (!blogPost) {
      throw new NotFoundException();
    }

    return of(blogPost);
  }
}
