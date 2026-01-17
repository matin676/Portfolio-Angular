import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';
import { Observable } from 'rxjs';

import { SkeletonComponent } from '../skeleton/skeleton';

@Component({
  selector: 'app-blog',
  imports: [AsyncPipe, DatePipe, SkeletonComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  private blogService = inject(BlogService);
  posts$: Observable<BlogPost[]> = this.blogService.getLatestPosts();
}
