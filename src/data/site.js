import izzatyImage from '../assets/team/izzaty.png'

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
    route: '/member/abbenisha',
    photo: 'abbenisha.jpg',
    ready: true,
  },
  {
    id: 'kristine',
    name: 'Kristine Elle Benjamin',
    role: 'UI/UX Designer',
    programme: 'Bachelor of Computer Science (Graphics & Multimedia Software)',
    shortDescription: 'Passionate about designing and creating interactive UI/UX and modern interfaces with a hint of immersion.',
    route: '/member/kristine',
    photo: 'kristine.jpg',
    ready: true,
  },
  {
    id: 'hanani',
    name: 'Nur Hanani Binti Ahmad',
    role: 'VR & AI Integration',
    programme: 'Bachelor of Computer Science (Graphics & Multimedia Software)',
    shortDescription:
      'Passionate about VR/AR development and AI-integrated tools, building accessible, ' +
      'user-centered digital experiences.',
    route: '/member/hanani',
    photo: 'hanani.jpg',
    ready: true,
  },
  {
    id: 'izzaty',
    name: 'Izzaty Balqis Binti Suhaimi',
    role: 'Animation & Effects',
    programme: 'Bachelor of Computer Science (Graphic and Multimedia Software)',
    shortDescription: 'Bringing data to life through motion and immersive 3D experiences. Passionate about interactive storytelling and visual effects.',
    route: '/member/izzaty',
    photo: izzatyImage,
    ready: true,
  },
]
