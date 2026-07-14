// All content for Abbenisha's portfolio section.
// Every section (About, Skills, Projects, Contact) renders from this file.

export const profile = {
  name: 'Abbenisha Ann Michael Benedict',
  role: 'Graphics & Multimedia Software Student',
  tagline: 'Building interactive multimedia, VR and AI-driven experiences.',
  summary: [
    'I am a Bachelor of Computer Science (Graphics and Multimedia Software) student at Universiti Teknologi Malaysia, currently holding a CGPA of 3.84.',
    'I enjoy developing interactive multimedia applications, virtual reality experiences, AI-powered software and modern web applications.',
    'My main interests are Computer Graphics, Three.js, Unity, Artificial Intelligence, Virtual Reality, Human Computer Interaction and Multimedia Software Development. I like combining creativity with software engineering to build digital experiences people actually enjoy using.',
  ],
}

export const education = [
  {
    institution: 'Universiti Teknologi Malaysia',
    qualification: 'Bachelor of Computer Science (Graphics and Multimedia Software)',
    period: '2023 - Present',
    result: 'CGPA 3.84',
  },
  {
    institution: 'Johor Matriculation College',
    qualification: 'Life Science Stream',
    period: '2022 - 2023',
    result: 'CGPA 4.00',
  },
]

export const careerInterests = [
  'Artificial Intelligence',
  'Software Engineering',
  'Web Development',
  'Virtual Reality',
  'Computer Graphics',
  'Mobile Application Development',
]

export const achievements = [
  { title: 'Treasurer', detail: 'Computer Graphics and Multimedia Association (CGMA)' },
  { title: 'Vice Director', detail: 'Annual Grand Meeting' },
  { title: 'Chief Facilitator', detail: 'BOXTROLLS' },
  { title: 'Committee Member', detail: 'CGMA Interactive Day' },
  { title: 'Kaggle Data Visualization', detail: 'Certificate' },
  { title: 'CGI Character Rigging', detail: 'Workshop' },
  { title: 'XR Studio', detail: 'Participation Certificate' },
]

export const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'PHP', 'SQL'],
  },
  {
    category: 'Frameworks',
    skills: ['Three.js', 'Unity', 'MediaPipe', 'OpenCV', 'Google VR SDK', 'Convai AI SDK'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'Visual Studio Code', 'MySQL'],
  },
  {
    category: 'Professional Skills',
    skills: [
      'Leadership',
      'Project Management',
      'Problem Solving',
      'Communication',
      'Team Collaboration',
    ],
  },
]

// Media paths are relative to this folder. A file that does not exist yet is
// drawn as a styled placeholder instead of breaking the page.
//
// `contributions`, `challenges` and `lessons` are yours to fill in — only you
// know them. Each is a list of strings. While a list is empty the modal shows
// the section heading with a short "to be added" note; add an entry and the
// note is replaced by your bullets.
export const projects = [
  {
    id: 'emomaze',
    title: 'EMOmaze',
    shortDescription:
      'A multiplayer 3D maze game controlled entirely by facial expressions instead of a keyboard.',
    overview: [
      'EMOmaze is a multiplayer facial-expression-controlled 3D maze game developed using Unity.',
      'Players navigate through a 3D maze using facial expressions detected through Google MediaPipe instead of traditional keyboard controls.',
      'The project integrates computer vision, facial expression recognition, multiplayer networking and real-time 3D rendering to create a unique hands-free gaming experience.',
    ],
    features: [
      'Real-time facial expression recognition',
      'Emotion-based player movement',
      'MediaPipe Face Landmark Detection',
      'Interactive 3D maze',
      'Mirror multiplayer networking',
    ],
    technologies: ['Unity', 'C#', 'Google MediaPipe', 'Mirror Networking', 'Visual Studio', 'GitHub'],
    contributions: [
      'Designed and developed the facial-expression recognition gameplay mechanic using Google MediaPipe.',
      'Integrated real-time emotion detection with Unity to control player movement.',
      'Implemented the emotion scoring and movement logic.',
      'Assisted with multiplayer integration using Mirror Networking.',
      'Participated in testing, debugging and improving the gameplay experience.',
    ],
    challenges: [
      'Integrating MediaPipe with Unity while maintaining stable real-time performance.',
      'Mapping facial expressions accurately to player movement.',
      'Synchronising multiplayer gameplay without introducing noticeable latency.',
      'Ensuring emotion detection remained reliable under different lighting conditions.',
    ],
    lessons: [
      'Learned how computer vision can be integrated into interactive games.',
      'Improved my Unity development and debugging skills.',
      'Gained experience working with multiplayer networking using Mirror.',
      'Strengthened teamwork and software integration skills throughout development.',
    ],
    thumbnail: 'assets/projects/emomaze/thumbnail.png',
    screenshots: [
      'assets/projects/emomaze/screenshot1.png',
      'assets/projects/emomaze/screenshot2.png',
      'assets/projects/emomaze/screenshot3.png',
    ],
    video: 'assets/projects/emomaze/demo.mp4',
  },
  {
    id: 'dialink',
    title: 'DiaLink',
    shortDescription:
      'A club management platform built for the UTM Diabolo Club, from membership to analytics.',
    overview: [
      'DiaLink is a web application developed for the Universiti Teknologi Malaysia Diabolo Club.',
      'The application simplifies membership management, committee administration, attendance tracking, announcements, analytics and communication through an intuitive web platform.',
      'The system was designed to improve the efficiency of club management while providing an organized and user-friendly experience.',
    ],
    features: [
      'Authentication',
      'Role-based dashboard',
      'Member management',
      'Analytics dashboard',
      'AI chatbot',
      'Committee management',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Chart.js',
      'Cloudinary',
      'GitHub',
      'Figma',
    ],
    contributions: [
      'Designed and developed several user interface pages for the web application.',
      'Implemented frontend features using HTML, CSS and JavaScript.',
      'Assisted in integrating PHP with the MySQL database.',
      'Contributed to testing, debugging and improving the user experience.',
      'Worked collaboratively using GitHub for version control.',
    ],
    challenges: [
      'Maintaining consistent data flow between the frontend and backend.',
      'Designing interfaces that were simple and user-friendly.',
      'Managing collaborative development while avoiding merge conflicts.',
      'Ensuring database operations worked correctly across different modules.',
    ],
    lessons: [
      'Improved my understanding of full-stack web development.',
      'Learned how frontend and backend components communicate.',
      'Gained experience with collaborative software development using GitHub.',
      'Better understood database design and user-centred interface development.',
    ],
    thumbnail: 'assets/projects/dialink/thumbnail.png',
    screenshots: [
      'assets/projects/dialink/screenshot1.png',
      'assets/projects/dialink/screenshot2.png',
      'assets/projects/dialink/screenshot3.png',
    ],
    video: 'assets/projects/dialink/demo.mp4',
  },
  {
    id: 'vr',
    title: 'VR Walkthrough with AI Avatar',
    shortDescription:
      'An immersive VR environment where you hold a natural conversation with an AI-powered avatar.',
    overview: [
      'A virtual reality walkthrough application developed using Unity and the Google VR SDK.',
      'Users explore immersive virtual environments while interacting naturally with AI-powered virtual avatars integrated using the Convai AI SDK.',
      'The project combines VR technology, conversational AI and interactive 3D environments to create an engaging user experience.',
    ],
    features: [
      'Virtual reality navigation',
      'AI avatar conversation',
      'Interactive environment',
      '3D assets',
      'Immersive experience',
    ],
    technologies: ['Unity', 'Google VR SDK', 'Convai AI SDK', 'C#', 'GitHub'],
    contributions: [
      'Developed the virtual environment using Unity.',
      'Integrated the Google VR SDK for immersive mobile VR navigation.',
      'Connected the Convai AI SDK to enable natural conversations with virtual characters.',
      'Designed and tested interactive scenes for a smoother user experience.',
      'Optimised the application for mobile VR devices.',
    ],
    challenges: [
      'Integrating multiple SDKs within a single Unity project.',
      'Maintaining smooth performance on mobile hardware.',
      'Creating natural interactions between users and AI avatars.',
      'Balancing visual quality with application performance.',
    ],
    lessons: [
      'Learned the workflow of developing immersive VR applications.',
      'Gained practical experience integrating AI into virtual environments.',
      'Improved my understanding of user interaction design in VR.',
      'Strengthened my Unity development and optimisation skills.',
    ],
    thumbnail: 'assets/projects/vr/thumbnail.png',
    screenshots: [
      'assets/projects/vr/screenshot1.png',
      'assets/projects/vr/screenshot2.png',
      'assets/projects/vr/screenshot3.png',
    ],
    video: 'assets/projects/vr/demo.mp4',
  },
]

export const contact = {
  name: 'Abbenisha Ann Michael Benedict',
  email: 'abbenishaann20@gmail.com',
  phone: '+60 16-940 1921',
  location: 'Johor Bahru, Malaysia',
  socials: [
    { label: 'GitHub', handle: 'abbenishaann', url: 'https://github.com/abbenishaann' },
    { label: 'LinkedIn', handle: 'abbenishaann', url: 'https://www.linkedin.com/in/abbenishaann' },
  ],
}
