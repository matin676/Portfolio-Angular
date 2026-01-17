import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Blog } from './components/blog/blog';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: {
      title: 'Matin Imam | Full Stack Developer',
      description:
        'Matin Imam - Full Stack Developer specializing in Angular, Spring Boot, and scalable web solutions. Explore my portfolio to see my latest work.',
    },
  },
  {
    path: 'about',
    component: About,
    data: {
      title: 'About Me | Portfolio',
      description: 'Learn more about my background, education, and professional journey.',
    },
  },
  {
    path: 'projects',
    component: Projects,
    data: {
      title: 'Projects | Portfolio',
      description: 'Explore my selected projects demonstrating web development expertise.',
    },
  },
  {
    path: 'skills',
    component: Skills,
    data: {
      title: 'Skills | Portfolio',
      description: 'My technical skills and expertise in web development.',
    },
  },
  {
    path: 'experience',
    component: Experience,
    data: {
      title: 'Experience | Portfolio',
      description: 'My professional experience and career timeline.',
    },
  },
  {
    path: 'blog',
    component: Blog,
    data: {
      title: 'Blog | Portfolio',
      description: 'Latest articles and insights on technology and development.',
    },
  },
  {
    path: 'contact',
    component: Contact,
    data: {
      title: 'Contact | Portfolio',
      description: 'Get in touch with me for opportunities or collaborations.',
    },
  },
  {
    path: '404',
    component: NotFound,
    data: {
      title: 'Page Not Found | Portfolio',
      description: 'The page you are looking for does not exist.',
    },
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
