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

export interface PorgramPlan {
  title: string;
  breif: string;
}
export interface SingleProgram {
  id: number;
  title: string;
  price: number;
  breif: string;
  img: string;
  description: string;
  hours: number;
  date: string;
  location: string;
  time: string;
  note: string;
  goals: string[];
  whattolearn: string[];
  subscribers: number;
  plan: PorgramPlan[];
}

export interface Consultunt {
  name: string;
  title: string;
  img: string;
}
