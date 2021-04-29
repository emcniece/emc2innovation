import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eric McNiece | DevOps Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Exploring IoT, DevOps and electronics', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'portrait-bw.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  //resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lamply.jpg',
    title: 'Advanced WordPress Stack',
    info: 'Containerized WordPress with multi-layer asset & opcode caching, scalable database configuration, SSL forwarding and reverse proxy support.',
    info2: 'PHP7, PHP-FPM, Nginx, Redis, HyperDB + MariaDB',
    url: 'https://github.com/emcniece/docker-wordpress',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lamply.jpg',
    title: 'Cordova RSSI Plugin',
    info: 'A Cross-platform WiFi Received Signal Strength Indicator plugin for Android and iOS.',
    info2: 'Sponsored by CNY Apps.',
    url: 'https://github.com/emcniece/cordova-plugin-rssi',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lamply.jpg',
    title: 'RGON Proxy',
    info: 'A dynamic distributed reverse proxy and load balancer for the Rancher 1.6 container orchestration platform.',
    info2: 'Deprecated by Traefik and Istio, but was pretty cool while it lasted.',
    url: 'https://github.com/CausticLab/rgon-proxy',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I\'m always open to project questions and collaboration.',
  btn: 'Drop me a line',
  email: 'hello@emc2innovation.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/emcniece',
    },
    {
      id: nanoid(),
      name: 'soundcloud',
      url: 'https://soundcloud.com/e_mcn',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eric-mcniece/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
