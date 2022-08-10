import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,

  // Frontend
  react,
  reactnative,
  nextjs,
  tailwind,

  // Backend
  graphql,
  node,
  django,

  // Cloud
  aws,
  gcp,
  docker,
  kubernetes,

  // Messaging
  nats,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,

  // Game Design
  unity,
  unreal,
  vr,
}

export const WorkStack = [
  Stack.typescript,
  Stack.react,
  Stack.reactnative,
  Stack.nextjs,
  Stack.tailwind,
  Stack.unity,
  Stack.unreal,
  Stack.vr,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: '#000',
  },
  [Stack.tailwind]: {
    value: 'Tailwind CSS',
    color: Colors.tailwind,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.unity]: {
    value: 'Unity',
    color: Colors.backend,
  },
  [Stack.unreal]: {
    value: 'Unreal Engine',
    color: Colors.redis,
  },
  [Stack.vr]: {
    value: 'VR',
    color: Colors.git,
  },
};
