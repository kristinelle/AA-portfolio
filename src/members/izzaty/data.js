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
    title: 'UTM Timetable Visualization and Analysis System (UTM-TVAS)',
    shortDescription: 'A web-based academic scheduling system that transforms raw timetable data into interactive visualizations, including color-coded session blocks, charts, and clash detection. Built as a Single Page Application (SPA) with real-time updates and role-based access for students and lecturers.',
    role: 'UI/UX Design (Figma prototype) & Front-End Development',
    figmaLink: 'https://www.figma.com/design/hulHAHm6obP1POQ53zLFRh/UTM-Timetable-Visual-and-Analysis-System?node-id=0-1&t=mzCO3JymbDT2mrQK-1',
    demoLink: 'https://izzatybalqis.github.io/UTM-TIMETABLE-VISUALIZATION-AND-ANALYSIS-SYSTEM-UTM-TVAS-',
    overview: [
      'Developed a fully functional web-based platform for timetable visualization and academic schedule management.',
      'Transformed complex, multi-dimensional calendar and schedule databases into clear, legible, and interactive dashboards.',
      'Supported administrative clash analysis and scheduling coordination tools under a unified Single Page Application.'
    ],
    features: [
      'Interactive timetable visualization with color-coded blocks',
      'Clash detection with bar charts and pie charts',
      'Room utilization analysis and available study space finder',
      'Timetable heatmap and day-by-day analysis',
      'Role-based access (Student / Lecturer) with different dashboards'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Node.js'],
    contributions: [
      'Designed high-fidelity mockups and interaction flows in Figma.',
      'Developed core frontend UI layout including responsive visualization grids.',
      'Implemented real-time filtering and schedule clash-rendering logics in JavaScript.'
    ],
    challenges: [
      'Representing dense multi-dimensional schedule data cleanly on mobile screen sizes.',
      'Minimizing query latency during complex filtering of academic databases.'
    ],
    lessons: [
      'Learned best practices for visual schedule representations and accessibility.',
      'Gained deep experience in handling dynamic state and user queries in pure JavaScript.'
    ]
  },
  {
    id: 'emomaze',
    title: 'EMOmaze Room',
    shortDescription: 'A real-time facial-expression-controlled 3D maze navigation game built in Unity. Players steer an avatar using only facial expressions (Happy, Sad, Angry, Surprise) captured via webcam.',
    overview: [
      'EMOmaze Room is an interactive 3D navigation game developed in Unity that leverages real-time facial expressions as the primary control mechanism.',
      'Using a standard webcam, the system captures facial landmarks via MediaPipe and processes them through a custom blendshape-based classifier to steer the player character through maze challenges.'
    ],
    features: [
      'Webcam facial landmark detection via MediaPipe',
      'Blendshape-based emotion scoring (Happy, Sad, Angry, Surprise)',
      'CharacterController physics movement integration',
      'Minimap HUD navigation and goal system',
      'Occlusion Culling optimization (33% FPS improvement)',
      'Mirror LAN multiplayer support'
    ],
    technologies: ['Unity 2022.3.20f1', 'MediaPipe', 'Mirror Networking', 'C#', 'Blendshape Emotion Classifier'],
    contributions: [
      'Developed the blendshape emotion classifier pipeline mapping webcam landmarks to movement physics.',
      'Configured Unity CharacterController physics and viewport minimap mechanics.',
      'Implemented Occlusion Culling to enhance mobile and low-spec execution performance.'
    ],
    challenges: [
      'Normalizing webcam calibration across varying light conditions and user facial structures.',
      'Optimizing rendering throughput when loading dense labyrinth assets in Unity.'
    ],
    lessons: [
      'Mastered landmark feature mapping pipelines for custom input wrappers.',
      'Gained deep experience profiling and tuning frame rendering budgets in Unity.'
    ]
  },
  {
    id: 'aurora-museum',
    title: 'Aurora Museum of Science & History',
    shortDescription: 'A multiplayer metaverse museum with AI-powered tour guide, real-time Firebase cloud sync, and Octree spatial optimization. Built in Unity with Photon networking and Claude AI integration.',
    hoverDescription: 'A multiplayer metaverse museum with AI tour guide, real-time cloud sync, and Octree optimization.',
    demo: 'https://drive.google.com/file/d/1fLwtT30GillCqfZ_y-9vOFQyNf9Ap0Du/view?usp=sharing',
    drive: 'https://drive.google.com/drive/folders/1BRCphZngSPdiAn3G3mVaB1w4ThEyWbVu',
    longDescription: 'Aurora Museum of Science & History is a first-person desktop metaverse where visitors explore a 4×4 grid of gallery rooms and interact with themed exhibits. Built on SENEM, the classroom subsystem was removed and replaced with an original walled-gallery museum, a custom spatial-optimization system, a Firebase cloud backend, and an AI tour guide. The application features over 3,000 static props, interactive raycast-based exhibit interaction, and seamless cloud persistence using Firebase Realtime Database. An AI docent powered by Claude Messages API answers visitor questions with context-aware responses based on the current exhibit being viewed. The Octree occlusion culling system reduces rendered objects by an average of 83.2%. Multiplayer support via Photon allows up to 5 users to explore the museum together with synchronized movement and voice chat.',
    features: [
      'Custom Virtual Environment: 4×4 grid of walled galleries with 3,142 renderers and 5 interactive exhibits',
      'Camera-Centre Raycasting: Decoupled ExhibitInteractable and ExhibitRaycaster scripts for precise interaction',
      'Fair Avatar Spawning: Radial ring spawn keyed to Photon ActorNumber',
      'Firebase Database: REST + SSE with master-authoritative visitor count and ETag compare-and-swap for favourites',
      'AI Tour Guide: Claude Messages API with world-state injection and offline fallback',
      'Octree Spatial Optimization: 201 nodes, 176 leaves, 83.2% average reduction in rendered objects'
    ],
    technologies: ['Unity 2022.3.20f1', 'C#', 'Firebase', 'Photon', 'Claude AI', 'Octree'],
    performanceMetrics: [
      { pose: 'Entrance, look across galleries', off: '2,444', on: '324', culled: '2,120', reduction: '86.7%' },
      { pose: 'Mid room, look down a row', off: '1,156', on: '188', culled: '968', reduction: '83.7%' },
      { pose: 'Corner, face a wall', off: '52', on: '52', culled: '0', reduction: '0.0%' },
      { pose: 'Centre, look into a corner', off: '882', on: '197', culled: '685', reduction: '77.7%' },
      { pose: 'AVERAGE', off: '1,133', on: '190', culled: '943', reduction: '83.2%' }
    ],
    controls: [
      { key: 'WASD / mouse', action: 'Move / look (first person)' },
      { key: 'E', action: 'Interact with / favourite exhibit' },
      { key: 'O', action: 'Toggle Octree optimization ON/OFF' },
      { key: 'P', action: 'Start / stop benchmark dolly (CSV)' },
      { key: 'F3', action: 'Toggle benchmark HUD' },
      { key: 'F4', action: 'Toggle Firebase live overlay' },
      { key: 'Tab / Enter', action: 'Push-to-talk (Voice) / text chat' }
    ]
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
