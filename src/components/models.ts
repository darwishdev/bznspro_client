import { SocialLink } from './layouts/models';
export interface Service {
  id: number;
  title: string;
  img?: string;
  content: string;
}

export interface Team {
  title: string;
  name: string;
  img: string;
}

export interface Project {
  id: number;
  title: string;
  img: string;
  cat?: string;
}

export interface ProjectCat {
  cat: Cat;
  projects: Project[];
}

export interface Testemonial {
  name: string;
  job: string;
  img: string;
  letters: string;
  content: string;
}

export interface Cat {
  id: number;
  name: string;
}
export interface Blog {
  id: number;
  views?: number;
  name: string;
  cat: string;
  img: string;
  breif?: string;
  date: string;
  links?: SocialLink[];
}

export interface Meta {
  totalCount: number;
}

export interface Goal {
  title: string;
  text: string;
  icon: string;
}

export interface Program {
  id: number;
  title: string;
  text: string;
  img: string;
}
