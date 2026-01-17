import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface BlogPost {
  title: string;
  link: string;
  thumbnail: string;
  publishedDate: string;
  summary: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private http = inject(HttpClient);
  private readonly FEED_URL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://techtalesdev.blogspot.com/feeds/posts/default?alt=rss';

  getLatestPosts(): Observable<BlogPost[]> {
    return this.http.get<any>(this.FEED_URL).pipe(
      map((data) => {
        const items = data.items || [];
        return items.slice(0, 6).map((item: any) => {
          return {
            title: item.title,
            link: item.link,
            thumbnail: this.getHighResImage(item.thumbnail) || 'assets/blog-placeholder.jpg',
            publishedDate: item.pubDate,
            summary: this.stripHtml(item.description).substring(0, 150) + '...',
          };
        });
      })
    );
  }

  private getHighResImage(url: string): string {
    if (!url) return '';
    // Handle standard Blogger path segments like /s72-c/, /w72-h72/, /h120/
    let newUrl = url.replace(/\/[swh]\d+(-[a-z0-9]+)*\//, '/s600/');
    // Handle query param style like =s72-c
    newUrl = newUrl.replace(/=s\d+(-[a-z0-9]+)*$/, '=s600');
    return newUrl;
  }

  private stripHtml(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }
}
