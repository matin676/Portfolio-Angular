import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ScrollTop } from './components/scroll-top/scroll-top';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      offset: 50,
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        // Base URL - Replace with actual domain when deployed
        const baseUrl = 'https://matinimam.com';
        const url = this.router.url === '/' ? baseUrl : `${baseUrl}${this.router.url}`;

        // General Meta
        if (data['title']) {
          this.titleService.setTitle(data['title']);
          this.metaService.updateTag({ property: 'og:title', content: data['title'] });
          this.metaService.updateTag({ name: 'twitter:title', content: data['title'] });
        }
        if (data['description']) {
          this.metaService.updateTag({ name: 'description', content: data['description'] });
          this.metaService.updateTag({ property: 'og:description', content: data['description'] });
          this.metaService.updateTag({ name: 'twitter:description', content: data['description'] });
        }

        // Static/Default Meta
        this.metaService.updateTag({ property: 'og:type', content: 'website' });
        this.metaService.updateTag({ property: 'og:url', content: url });
        this.metaService.updateTag({ property: 'og:image', content: `${baseUrl}/mi-art.png` });
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaService.updateTag({ name: 'twitter:image', content: `${baseUrl}/mi-art.png` });

        // Canonical URL
        let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'canonical');
          document.head.appendChild(link);
        }
        link.setAttribute('href', url);
      });
  }
}
