// Group-wide content for the landing page, navbar and routes.
//
// `teamMembers` is the single source of truth for the team. Adding or editing a
// member here updates the About Us cards, the navbar links and the routes at
// once — no component needs to change.
//
// Each member edits ONLY their own entry:
//   name, role, programme, shortDescription  -> their card
//   photo                                    -> src/assets/team/<file>
//   ready: true                              -> once their Portfolio page is
//                                               wired into src/App.jsx
export const site = {
  groupName: 'MuskeFour',
  portfolioTitle: 'Interactive 3D Portfolio',
  tagline: 'Building immersive experiences for the web',
  course: 'SECV3263 Multimedia Web Programming',
  intro:
    'We are a team of Universiti Teknologi Malaysia computer science students exploring the ' +
    'intersection of 3D graphics, interaction design and the modern web. This portfolio showcases ' +
    'our individual work, built with React and Three.js.',
}

export const teamMembers = [
  {
    id: 'abbenisha',
    name: 'Abbenisha Ann Michael Benedict',
    role: 'Project Lead & Three.js Setup',
    programme: 'Bachelor of Computer Science (Graphics & Multimedia Software)',
    shortDescription:
      'Passionate about interactive multimedia, AI, virtual reality and immersive user experiences.',
    route: '/abbenisha',
    photo: 'abbenisha.jpg',
    ready: true,
  },
  {
    id: 'kristine',
    name: 'Kristine Elle',
    role: 'UI/UX Designer',
    programme: 'Graphics & Multimedia Software',
    shortDescription: 'Portfolio coming soon.',
    route: '/kristine',
    photo: 'kristine.jpg',
    ready: false,
  },
  {
    id: 'hanani',
    name: 'Hanani',
    role: 'Multimedia & Contact',
    programme: 'Graphics & Multimedia Software',
    shortDescription: 'Portfolio coming soon.',
    route: '/hanani',
    photo: 'hanani.jpg',
    ready: false,
  },
  {
    id: 'izzaty',
    name: 'Izzaty Balqis Binti Suhaimi',
    role: 'Graphics & Multimedia Developer',
    programme: 'Bachelor of Computer Science (Graphic and Multimedia Software) with Honours',
    shortDescription:
      'Computer Science student at UTM specializing in Graphics & Multimedia Software, with a passion for web platform development, visualization tools, and 3D experiences.',
    route: '/izzaty',
    photo: 'izzaty.jpg',
    ready: true,
  },
]
