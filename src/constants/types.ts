export interface ContactInfo {
  text: string;
  whatsapp: string;
  email: string;
  github: string;
  linkedin: string;
  resume_text_en: string;
  resume_text_es: string;
  resume_en: string;
  resume_es: string;
}

export interface Locales {
  idiom: string;
  welcome_text: string;
  who_i_am: string;
  my_startups: string;
  my_projects: string;
  my_lang_stack: string;
  contact_me: ContactInfo;
  help_text: string;
  page_text: string;
  gh_front_text: string;
  gh_back_text: string;
  description: string;
  lang: string;
}

export interface Project {
  id: number;
  name: string;
  frontend: string[];
  backend: string[];
  video_tutorial_es?: string;
  video_tutorial_en?: string;
  poster_url: string;
  description_es: string;
  description_en: string;
  github_f?: string;
  github_b?: string;
  domain?: string;
  image_url?: string;
  github?: string;
  language_code?: string;
}

export interface StackImages {
  [key: string]: string;
}
