export interface Service {
  id: number;
  title: string;
  content: string;
}

export interface Project {
  id: number;
  title: string;
  img: string;
  cat: string;
}

export interface Testemonial {
  name: string;
  job: string;
  img: string;
  letters: string;
  content: string;
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
