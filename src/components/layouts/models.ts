

export interface NavItem {
  text: string;
  to: string;
}

export interface SocialLink {
  icon: string;
  url: string;
}

export interface FooterLists {
  title: string;
  links: NavItem[];
}
