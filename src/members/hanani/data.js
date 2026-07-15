
// Demo videos — place your .mp4 files in src/members/hanani/assets/demo/
// using these exact filenames (or update the paths below to match yours).
// Vite will bundle these automatically once the files exist; leaving a file
// out is fine, its import just needs to be commented out or the project's
// `video` field left as null.
import signbridgeDemo from './assets/demo/signbridge.mp4'
import gestureUiDemo from './assets/demo/gesture-ui.mp4'
import vrWalkthroughDemo from './assets/demo/vr-walkthrough.mp4'
import dialinkDemo from './assets/demo/dialink.mp4'
import babelcityDemo from './assets/demo/babelcity.mp4'

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
      period: '2023 – Present',
      title: 'Universiti Teknologi Malaysia (UTM)',
      description: 'Bachelor of Computer Science (Graphics & Multimedia)',
      badge: 'CGPA 3.75 / 4.00',
    },
    {
      period: '2022 – 2023',
      title: 'Kedah Matriculation College',
      description: 'Physical Sciences Stream',
      badge: 'CGPA 3.75 · MUET Band 5.0',
    },
  ],
  aspirations:
    'Seeking an internship from September 2026 to February 2027 to further grow in VR/AR and ' +
    'interactive graphics development, while contributing creativity, adaptability, and strong ' +
    'teamwork.',
  achievements: [
    {
      period: '2026',
      title: 'Gold Medal (Tertiary Online)',
      description: 'SignBridge — International Invention, Innovation & Design Competition (I3DC) 2026',
    },
    {
      period: 'Nov 2025',
      title: "MEXRA '25 Certificate of Appreciation",
      description: 'Awarded by the UTM Deputy Vice-Chancellor',
    },
    {
      period: 'June 2025',
      title: 'XR Studio Participation Certificate',
      description: 'Asia Pacific University',
    },
    {
      period: 'May 2025',
      title: 'CGI Workshop: Character Rigging & Animation',
      description: 'mivieLab',
    },
    {
      period: 'Ongoing',
      title: "Dean's List",
      description: 'Semesters 1, 2, 4 & 5 — UTM',
    },
  ],
  leadership: [
    {
      period: 'Nov 2025',
      title: "Head of Protocol Unit, MEXRA '25",
      description:
        'Led protocol operations for a 7-day international XR programme at the University of ' +
        'Tokyo, scripted the running order, and coordinated correspondence with the university ' +
        'and sponsorship parties.',
      badge: 'Tokyo, Japan',
    },
    {
      period: '2026',
      title: "Vice Director, EXPEDEA'26",
      description:
        'Assisting the Director in overseeing all units, coordinating program flow, committee ' +
        'management, and event logistics throughout preparation and execution.',
    },
    {
      period: '2026',
      title: "Chief Facilitator, BOXTROLLS '26",
      description:
        'Planned and created the activity programme, managed the activity unit, and ensured ' +
        'activities ran to schedule.',
    },
    {
      period: '2024',
      title: "Committee Member, CGMA Interactive Day (CID '24)",
      description: 'Assisted in preparing and managing gift distribution for event participants.',
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
      'via camera AI, and text-to-3D animated signing avatar for the reverse direction.',
    longDescription:
      'Co-developed a mobile app for two-way Malaysian Sign Language (BIM) interpretation. ' +
      'Camera-based gesture-to-text lets a signer be understood by a non-signer, while a ' +
      'text-to-3D animated avatar lets a non-signer sign back. Real-time sign classification runs ' +
      'on TensorFlow/Keras hand landmark detection, wrapped in an accessible, inclusive Flutter UI. ' +
      'Won Gold Medal (Tertiary Online) at I3DC 2026.',
    tech: ['Flutter', 'TensorFlow/Keras', 'AI Gesture Recognition', '3D Avatar Animation'],
    video: signbridgeDemo,
    videoType: 'file',
  },
  {
    title: 'Gesture & Speech-Controlled UI System',
    tagline: 'Unity · Leap Motion · Speech Recognition',
    description:
      'A gesture-driven hover menu using Leap Motion hand tracking, where a left-hand flip ' +
      'triggers a 3-panel UI menu and the right hand navigates and selects options in real time.',
    longDescription:
      'Engineered a gesture-driven hover menu using Leap Motion hand tracking — a left-hand flip ' +
      'triggers a 3-panel UI menu, and the right hand navigates and selects options in real time. ' +
      'Also built a portal interaction system combining hand gestures with speech input to trigger ' +
      'character animations (jump, dance, run) on voxel characters loaded into the scene.',
    tech: ['Unity', 'Leap Motion', 'Speech Recognition', 'C#'],
    video: gestureUiDemo,
    videoType: 'file',
  },
  {
    title: 'VR Walkthrough with AI Avatar',
    tagline: 'Google Cardboard VR · Convai AI',
    description:
      'A mobile VR walkthrough built with the Google Cardboard SDK in Unity, featuring ' +
      'gaze-based interaction and a Convai AI conversational NPC avatar.',
    longDescription:
      'Built a mobile VR walkthrough application using the Google Cardboard SDK in Unity, ' +
      'implementing binocular rendering, gaze-based interaction, and head-movement navigation for ' +
      'full VR immersion. Integrated a Convai AI conversational avatar for real-time NPC interaction, ' +
      'and designed/optimised custom 3D voxel characters as the main scene assets.',
    tech: ['Unity', 'Google VR SDK', 'Convai AI SDK', 'C#'],
    video: vrWalkthroughDemo,
    videoType: 'file',
  },
  {
    title: 'DiaLink — Club Management Web App',
    tagline: 'Full UI/UX design + full-stack build',
    description:
      'Full UI/UX design in Figma and a full-stack web app for the UTM Diabolo Club — member ' +
      'management, attendance tracking, gallery, and announcements.',
    longDescription:
      'Designed full UI/UX in Figma and developed a web app for the UTM Diabolo Club handling ' +
      'member management, attendance tracking, gallery, and club announcements. Implemented a PHP ' +
      'backend notification system with categorised announcements, read/unread tracking, and ' +
      'automated event reminders; managed team collaboration via GitHub.',
    tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'Figma'],
    video: dialinkDemo,
    videoType: 'file',
  },
  {
    title: 'BabelCity',
    tagline: 'SECV3123 Real-Time Computer Graphics · Team Project',
    description:
      'An optimised metaverse language-learning platform in Unity 6 — three cultural districts, ' +
      'Convai AI NPCs, trivia quizzes, and a Babel Coin economy.',
    longDescription:
      'BabelCity is an immersive metaverse-based language learning platform built in Unity 6, set ' +
      'across three culturally themed districts — Tokyo, Seoul, and Dubai — each populated with ' +
      'Convai-powered AI NPCs that hold open-ended conversations in the district\'s target language. ' +
      'My contributions: Convai AI NPC integration (character configuration, push-to-talk and text ' +
      'input), the TriviaManager (per-district question bank, random selection), BabelCoinManager ' +
      '(reward economy and HUD), NPCQuizTrigger for proximity-based quiz activation, UI/UX design ' +
      'for the quiz panel and home screen, and compiling the final technical report. Graphics ' +
      'optimisation across the team (occlusion culling, static batching, LOD) took the scene from ' +
      '63.3 to 106.1 FPS.',
    tech: ['Unity 6', 'C#', 'Convai AI SDK', 'Unity Netcode', 'UI/UX Design'],
    video: babelcityDemo,
    videoType: 'file',
  },
]

export const contact = {
  email: 'hynanie04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nur-hanani-binti-ahmad-b636333a3/',
  github: 'https://github.com/hynanie',
}
