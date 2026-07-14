// Portfolio content data source

export const profile = {
  name: 'Izzaty Balqis Binti Suhaimi',
  role: 'Graphics & Multimedia Software Student',
  tagline: 'Building Immersive Experiences & Interactive Multimedia Systems',
  summary: [
    'I am a motivated Computer Science student specializing in Graphics and Multimedia Software at Universiti Teknologi Malaysia (UTM). I have a strong passion for software development, multimedia technologies, artificial intelligence, and interactive systems.',
    'I specialize in building web-based platforms, visualization tools, and image processing applications. Recognized for leadership, teamwork, communication, and problem-solving abilities, I love combining creativity with engineering to build immersive digital solutions.',
  ],
}

export const education = [
  {
    institution: 'Universiti Teknologi Malaysia (UTM)',
    qualification: 'Bachelor of Computer Science (Graphic and Multimedia Software) with Honours',
    period: 'Expected Graduation: September 2027',
    result: 'Current CGPA: 3.79 / 4.00',
  },
  {
    institution: 'Johor Matriculation College',
    qualification: 'Matriculation in Computer Science',
    period: 'July 2022 - May 2023',
    result: 'CGPA: 3.69 / 4.00',
  },
]

export const leadership = [
  {
    role: 'Grand Treasurer',
    organization: 'EXPEDEA\'26 - Computer Graphics & Multimedia Association (CGMA), UTM',
    period: 'Oct 2023 - Present',
    details: 'Managed financial planning, budgeting, and allocation for the event.',
  },
  {
    role: 'Grand Treasurer',
    organization: 'BOXTROLL\'26 - CGMA, UTM',
    period: 'Oct 2023 - Present',
    details: 'Handled financial documentation and budget allocation for the event.',
  },
  {
    role: 'Head of Department',
    organization: 'Multimedia Unit, AGM\'25 - CGMA, UTM',
    period: '2025',
    details: 'Led multimedia production, coordination, and team management.',
  },
]

export const awards = [
  {
    title: 'Metaverse and XR Adventure (MEXRA\'25)',
    institution: 'UTM - Tokyo, Japan',
    period: 'Nov 2025',
    details: 'Participated in cultural exchange activities, enhancing global awareness and cross-cultural collaboration. Gained academic and industry exposure at Money Forward Inc. and University of Tokyo.',
  },
  {
    title: 'Dean\'s List Award',
    institution: 'Universiti Teknologi Malaysia',
    period: 'Ongoing',
    details: 'Received Dean\'s List for 5 of 6 semesters, reflecting academic excellence and consistent performance.',
  },
]

export const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'PHP', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    skills: ['MySQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Node.js', 'Pandas', 'NumPy'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Figma', 'Unity', 'Google Colab', 'Git/GitHub'],
  },
]

export const projects = [
  {
    id: 'utm-tvas',
    title: 'Timetable Visualization Analysis System (UTM-TVAS)',
    shortDescription: 'A web-based platform for timetable visualization and academic schedule management.',
    overview: [
      'Developed a fully functional web-based platform for timetable visualization and academic schedule management.',
      'Built data-driven visualizations and implemented interactive search and filtering.',
      'Delivered a responsive, user-friendly website interface accessible to students, lecturers, and administrators.',
    ],
    features: [
      'Interactive search and filtering by courses, lecturers, and venues',
      'Dynamic timetable schedule visualizations',
      'Role-based features for students, lecturers, and admins',
      'Responsive, modern user interface design',
    ],
    technologies: ['HTML', 'JavaScript', 'Node.js', 'CSS', 'Git', 'GitHub'],
    contributions: [
      'Designed and developed the front-end interface using modern web layout paradigms.',
      'Implemented interactive schedule filtering logic in JavaScript.',
      'Assisted in setting up the Node.js back-end to serve visualization data.',
    ],
    challenges: [
      'Representing dense multi-dimensional schedule data cleanly on mobile screen sizes.',
      'Minimizing query latency during complex filtering of academic databases.',
    ],
    lessons: [
      'Learned best practices for visual schedule representations and accessibility.',
      'Gained deep experience in handling dynamic state and user queries in pure JavaScript.',
    ],
  },
  {
    id: 'task-managing-system',
    title: 'Academic Task Managing System',
    shortDescription: 'A relational web database application managing tasks for students, lecturers, and coordinators.',
    overview: [
      'Built a web-based task management system to manage academic tasks for students, lecturers, and coordinators.',
      'Designed a relational database with ERD and SQL schema to support task workflows and reporting.',
      'Delivered a user-friendly dashboard with search filters, progress indicators, and secure login/password reset.',
    ],
    features: [
      'Interactive student/lecturer/coordinator dashboards',
      'Relational database integration tracking task workflows',
      'Progress indicators, search filters, and task reporting tools',
      'Secure login and password recovery',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Figma'],
    contributions: [
      'Designed the complete ERD and schema mappings for relational database structure.',
      'Developed core PHP controller logics managing user sessions and progress updates.',
      'Built custom responsive dashboard CSS from scratch.',
    ],
    challenges: [
      'Handling role-based authorization securely so students cannot access lecturer/coordinator controls.',
      'Designing database queries to return aggregated task statistics for reporting.',
    ],
    lessons: [
      'Strengthened backend PHP skills and secure authentication workflow patterns.',
      'Gained deep understanding of relational database normalization and SQL optimization.',
    ],
  },
  {
    id: 'image-editing-tools',
    title: 'Unified Image Editing Tools',
    shortDescription: 'A desktop/web image enhancement application featuring noise reduction and controls.',
    overview: [
      'Created an image enhancement application with accessible editing tools.',
      'Implemented noise reduction, brightness/contrast adjustment, sharpening, cropping, and opacity control.',
      'Designed a modern, intuitive interface and improved visual clarity and usability.',
    ],
    features: [
      'Noise reduction algorithms and sharpening filters',
      'Real-time brightness, contrast, and opacity controls',
      'Cropping and basic canvas transformation tools',
      'High-fidelity UI mockups and prototypes',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Figma', 'Git'],
    contributions: [
      'Researched and implemented matrix-based image filtering using NumPy.',
      'Designed a clean, modern user interface prototype in Figma.',
      'Optimized image calculation pipelines to run efficiently.',
    ],
    challenges: [
      'Improving processing speed for large resolution images using matrix transformations.',
      'Balancing UI ease-of-use with advanced image adjustment controls.',
    ],
    lessons: [
      'Learned the mathematical foundations of image convolutions and noise reduction filters.',
      'Gained skills in UI layout prototypes and user experience design paradigms.',
    ],
  },
]

export const contact = {
  name: 'Izzaty Balqis Binti Suhaimi',
  email: 'izzatybalqis@graduate.utm.my',
  phone: '+60169440398',
  location: 'Universiti Teknologi Malaysia, Johor Bahru, Malaysia',
  socials: [
    { label: 'LinkedIn', handle: 'izzaty-balqis', url: 'https://linkedin.com/in/izzaty-balqis' },
    { label: 'GitHub', handle: 'IzzatyBalqis', url: 'https://github.com/IzzatyBalqis' },
  ],
}
