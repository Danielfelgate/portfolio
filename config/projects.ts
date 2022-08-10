import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website?: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository?: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment?: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Virtual Reality Design Review Program',
    slug: 'vrdr',
    banner: '/static/projects/vrdr/banner.jpg',
    description:
      'An Unreal Engine program for visualising CAD designs in a photorealistic multi-user VR environment developed for Enphase Energy. It supports viewing CAD models in an exploded view as well as attaching the model to various objects in the environment to view it in specific contexts. We also had to develop a system for syncing the CAD model and its runtime assigned materials between users connected through a VPN network.',
    shortDescription:
      'An Unreal Engine program for visualising CAD designs in a photorealistic multi-user VR environment',
    stack: [Stack.unreal, Stack.vr],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/vrdr/banner.jpg',
      '/static/projects/vrdr/1.png',
      '/static/projects/vrdr/2.png',
      '/static/projects/vrdr/3.jpg',
    ],
    subProjects: [],
  },
  {
    title: 'This Portfolio Website',
    slug: 'portfolio',
    banner: '/static/projects/portfolio/banner.jpg',
    website: 'https://danielfelgate.com',
    description:
      'A simple website to showcase my portfolio. Forked from https://github.com/karanpratapsingh/portfolio, which was in turn based upon https://github.com/timlrx/tailwind-nextjs-starter-blog.',
    shortDescription: 'A simple website to showcase my portfolio',
    repository: 'https://github.com/Danielfelgate/portfolio',
    stack: [Stack.typescript, Stack.react, Stack.nextjs, Stack.tailwind],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/portfolio/1.jpg',
      '/static/projects/portfolio/2.jpg',
      '/static/projects/portfolio/banner.jpg',
    ],
    subProjects: [],
  },
  {
    title: 'Spellbinder',
    slug: 'spellbinder',
    banner:
      'https://img.itch.zone/aW1hZ2UvMTYzMzQ5MS85NzQ2NjUwLnBuZw==/original/WcN6qj.png',
    website: 'https://cyborgmantis.itch.io/spellbinder',
    description:
      'A potion crafting game created in a team of four for Kiwijam 2022.',
    shortDescription:
      'A potion crafting game created in a team of four for Kiwijam 2022',
    stack: [Stack.unity],
    dimensions: [360, 640],
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvMTYzMzQ5MS85NzQ2NjUwLnBuZw==/original/WcN6qj.png',
      'https://img.itch.zone/aW1hZ2UvMTYzMzQ5MS85NjAzMjgzLnBuZw==/original/6L%2FPkY.png',
      'https://img.itch.zone/aW1hZ2UvMTYzMzQ5MS85NjAzMjgxLnBuZw==/original/ckcODw.png',
    ],
    subProjects: [],
  },
  {
    title: 'Astroturf',
    slug: 'astroturf',
    banner:
      'https://img.itch.zone/aW1hZ2UvMTU0MTE5My84OTkwODc0LnBuZw==/original/Qi9iNJ.png',
    website: 'https://cyborgmantis.itch.io/astroturf',
    description:
      'A space farming game created in a team of two for Game Jam Aotearoa 2022. Visually inspired by papercraft style games such as paper mario.',
    shortDescription:
      'A space farming game created in a team of two for Game Jam Aotearoa 2022',
    stack: [Stack.unity],
    dimensions: [360, 640],
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvMTU0MTE5My84OTkwODc0LnBuZw==/original/Qi9iNJ.png',
      'https://img.itch.zone/aW1hZ2UvMTU0MTE5My84OTkwODY0LnBuZw==/original/A3xXHN.png',
      'https://img.itch.zone/aW1hZ2UvMTU0MTE5My84OTkwODczLnBuZw==/original/KeAQ8g.png',
    ],
    subProjects: [],
  },
  {
    title: 'Pixel Art Projection System',
    slug: 'pixel',
    banner: '/static/projects/pixel/5.jpg',
    description:
      "This project is an exploration in novel level design techniques, to create a large open world in an isometric pixel art style. The world is fully 3D with sprite based characters, rendered in such a way as to eliminate pixel crawling and present as a stable pixel art image, while also enabling automatic parallax with distant scenery. I created a tool that automatically captures an image of a group of scene objects from the isometric camera's prespective and uv maps them to allow that image to be projected back onto them. Pixel level details can then be drawn onto these images to be projected back onto the scene objects. This allows developers to block out an environment in 3D and then draw the details of the environment at the pixel level, allowing for a high detail pixel art artstyle while avoiding issues such a complicated draw order in highly vertical environments.",
    shortDescription:
      'An exploration into creating large pixel art worlds using a 3D environment and image reprojection to create detail',
    stack: [Stack.unity],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/pixel/3.jpg',
      '/static/projects/pixel/4.jpg',
      '/static/projects/pixel/5.jpg',
      '/static/projects/pixel/1.jpg',
      '/static/projects/pixel/2.jpg',
    ],
    subProjects: [],
  },
];
