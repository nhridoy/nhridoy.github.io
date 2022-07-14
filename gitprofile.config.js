// gitprofile.config.js

const config = {
  github: {
    username: 'nhridoy', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'nahidujjaman-hridoy',
    twitter: 'hridoyboss12',
    facebook: 'nahidujjaman.hridoy',
    instagram: 'hridoyboss',
    dribbble: '',
    behance: 'nhridoy',
    medium: '',
    dev: '',
    website: 'https://nhridoy.github.io',
    phone: '',
    email: 'nahidujjamanhridoy@gmail.com',
  },
  skills: [
    'Python',
    'Django',
    'Django Rest Framework',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind',
    'MUI',
  ],
  experiences: [
    {
      company: 'Nexis Limited',
      position: 'Full Stack Developer',
      from: 'May 2022',
      to: 'Present',
    },
    {
      company: 'Research Rider',
      position: 'Full Stack Developer',
      from: 'April 2022',
      to: 'May 2022',
    },
    {
      company: 'Techforing Limited',
      position: 'Backend Developer',
      from: 'September 2021',
      to: 'February 2022',
    },
  ],
  education: [
    {
      institution: 'Daffodil International University, Bangladesh',
      degree: 'Bachelor of Science',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'Jessore Polytechnic Institute, Jessore',
      degree: 'Diploma in Engineering',
      from: '2013',
      to: '2018',
    },
    {
      institution: 'Narail Government High School, Narail',
      degree: 'Secondary School Certificate (SSC)',
      from: '2007',
      to: '2013',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
