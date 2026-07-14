
export const profile = {
  name: 'Nur Hanani Binti Ahmad',
  matric: 'A23CS0157',
  role: 'Graphics & Multimedia Software',
  tagline: 'Building real-time 3D, VR, and AI-integrated experiences.',
  intro:
    "I'm a Computer Science student at UTM specialising in Graphics & Multimedia Software, " +
    'with a foundation in graphics, software development, and interactive media. I work across ' +
    'game systems, VR/AR applications, and AI-integrated tools to build accessible, ' +
    'user-centered digital experiences.',
  education: [
    {
      school: 'Universiti Teknologi Malaysia (UTM)',
      detail: 'Bachelor of Computer Science (Graphics & Multimedia) — CGPA 3.75',
      note: '2023 – Present',
    },
    {
      school: 'Kedah Matriculation College',
      detail: 'Physical Sciences Stream — CGPA 3.75, MUET Band 5.0',
      note: '2022 – 2023',
    },
    {
      school: 'SMK Khir Johari, Sungai Petani',
      detail: 'SPM — Science Stream (5A, 2B, 2C)',
      note: '2017 – 2021',
    },
  ],
  aspirations:
    'Seeking an internship from September 2026 to February 2027 to further grow in VR/AR and ' +
    'interactive graphics development, while contributing creativity, adaptability, and strong ' +
    'teamwork.',
  achievements: [
    'Gold Medal (Tertiary Online) — SignBridge, I3DC 2026',
    "Dean's List, Sem 1, 2, 4 & 5 — UTM",
    'CGI Workshop: Character Rigging & Animation — mivieLab (May 2025)',
    'XR Studio Participation Certificate — Asia Pacific University (June 2025)',
    "MEXRA '25 Certificate of Appreciation — UTM Deputy Vice-Chancellor (Nov 2025)",
  ],
  leadership: [
    {
      role: "Head of Protocol Unit, MEXRA '25 (Tokyo, Japan, Nov 2025)",
      detail:
        'Led protocol operations for a 7-day international XR programme at the University of ' +
        'Tokyo, scripted the running order, and coordinated correspondence with the university ' +
        'and sponsorship parties.',
    },
    {
      role: "Vice Director, EXPEDEA'26",
      detail:
        'Assisting the Director in overseeing all units, coordinating program flow, committee ' +
        'management, and event logistics throughout preparation and execution.',
    },
    {
      role: "Chief Facilitator, BOXTROLLS '26",
      detail:
        'Planned and created the activity programme, managed the activity unit, and ensured ' +
        'activities ran to schedule.',
    },
    {
      role: "Committee Member, CGMA Interactive Day 2024 (CID '24)",
      detail: 'Assisted in preparing and managing gift distribution for event participants.',
    },
  ],
}

export const skills = [
  {
    name: 'Unity & C#',
    detail: 'Game systems, VR/AR apps, and AI-integrated tools',
  },
  {
    name: 'Flutter & OpenCV',
    detail: 'Mobile apps with real-time camera-based AI gesture recognition',
  },
  {
    name: 'Leap Motion & Speech Recognition',
    detail: 'Gesture-driven and voice-driven interaction systems',
  },
  {
    name: 'Google VR SDK',
    detail: 'Mobile VR walkthroughs with gaze-based, head-movement navigation',
  },
  {
    name: 'Web Dev (PHP · JS · GitHub)',
    detail: 'Full-stack web apps with Figma-designed UI/UX',
  },
  {
    name: 'Clip Studio Paint & Blender',
    detail: 'Digital illustration (Expert) and 3D modelling (Beginner)',
  },
]

export const projects = [
  {
    title: 'SignBridge',
    tagline: 'Gold Medal, I3DC 2026',
    description:
      'A mobile app for two-way Malaysian Sign Language (BIM) interpretation — gesture-to-text ' +
      'via camera AI, and text-to-3D animated signing avatar for the reverse direction. Built ' +
      'accessible Flutter UI screens with real-time sign classification powered by TensorFlow/' +
      'Keras hand landmark detection.',
    tech: ['Flutter', 'TensorFlow/Keras', 'AI Gesture Recognition', '3D Avatar Animation'],
  },
  {
    title: 'Gesture & Speech-Controlled UI System',
    tagline: 'Unity · Leap Motion · Speech Recognition',
    description:
      'A gesture-driven hover menu using Leap Motion hand tracking, where a left-hand flip ' +
      'triggers a 3-panel UI menu and the right hand navigates and selects options in real time. ' +
      'Also built a portal interaction system combining hand gestures with speech input to ' +
      'trigger character animations (jump, dance, run) on voxel characters.',
    tech: ['Unity', 'Leap Motion', 'Speech Recognition', 'C#'],
  },
  {
    title: 'VR Walkthrough with AI Avatar',
    tagline: 'Google Cardboard VR · Convai AI',
    description:
      'A mobile VR walkthrough built with the Google Cardboard SDK in Unity, implementing ' +
      'binocular rendering, gaze-based interaction, and head-movement navigation for full ' +
      'immersion. Integrated a Convai AI conversational avatar for real-time NPC interaction, ' +
      'with custom 3D voxel characters as the main scene assets.',
    tech: ['Unity', 'Google VR SDK', 'Convai AI SDK', 'C#'],
  },
  {
    title: 'DiaLink — Club Management Web App',
    tagline: 'Full UI/UX design + full-stack build',
    description:
      'Designed full UI/UX in Figma and developed a web app for the UTM Diabolo Club handling ' +
      'member management, attendance tracking, gallery, and announcements. Implemented a PHP ' +
      'backend notification system with categorised announcements, read/unread tracking, and ' +
      'automated event reminders.',
    tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'Figma'],
  },
]

export const contact = {
  email: 'hynanie04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nur-hanani-binti-ahmad-b636333a3/',
  github: 'https://github.com/hynanie',
}
