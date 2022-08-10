export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
  itchio = 'itchio',
}

export interface Contact {
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: 'danielfelgate.com',
  links: {
    github: 'https://github.com/Danielfelgate',
    linkedin: 'https://www.linkedin.com/in/daniel-felgate/',
    email: 'mailto:danielfelgate@gmail.com',
    itchio: 'https://cyborgmantis.itch.io',
  },
};
