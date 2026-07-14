# Portfolio Edit Guide — Abbenisha Ann Michael Benedict

Everything in my portfolio section is driven by one data file and one assets
folder. You never need to edit a `.jsx` file to change content.

Run the site:

```bash
npm install
npm run dev
```

Landing page: <http://localhost:5173/> · My portfolio: <http://localhost:5173/abbenisha>

---

## 1. Which folder stores project screenshots

```
src/members/abbenisha ann/assets/projects/emomaze/
src/members/abbenisha ann/assets/projects/dialink/
src/members/abbenisha ann/assets/projects/vr/
```

Each project folder holds its own screenshots.

## 2. Which folder stores project videos

The **same folder** as that project's screenshots. The demo video for EMOmaze
lives at:

```
src/members/abbenisha ann/assets/projects/emomaze/demo.mp4
```

Each project folder contains a `FILES.txt` listing the five file names it expects.

## 3. Which file edits project descriptions

```
src/members/abbenisha ann/data.js
```

In the `projects` array: `shortDescription` is the line on the card, `overview`
is the paragraph list inside the modal, and `features` is the Key Features list.

## 4. Which file edits technologies

The same file — `src/members/abbenisha ann/data.js`, the `technologies` array on
each project. The card shows the first four and a `+n` chip; the modal shows all
of them.

## 5. Which file edits About information

Again `src/members/abbenisha ann/data.js` — the `profile`, `education`,
`careerInterests` and `achievements` exports.

## 6. Which file edits Skills

Same file, the `skillGroups` export. Each entry is a category and its skills.
Adding a new category automatically creates its filter tab — no code change.

## 7. How to replace screenshots

Save your image over the existing path, keeping the same file name:

```
src/members/abbenisha ann/assets/projects/emomaze/screenshot1.png
```

Recommended size is 800 × 600 (4:3). The image appears immediately — the app
scans the folder at build time, so no import or code edit is needed.

To add a **fourth** screenshot, save `screenshot4.png` and add one line to that
project's `screenshots` array in `data.js`. The gallery grid grows on its own.

## 8. How to replace videos

Save your video as `demo.mp4` inside the project folder:

```
src/members/abbenisha ann/assets/projects/dialink/demo.mp4
```

Use MP4 (H.264) so every browser can play it, and keep it small (720p, ideally
under ~20 MB) — large videos slow the page down and are awkward in Git.

### What shows before the real files are added

Nothing breaks. Any missing image renders as a clean placeholder card reading
**Project Screenshot**, and a missing video renders as **Project Demonstration
Video**. Screenshots and demo videos are the only placeholders in the site — all
other content is real.

## 9. How to add another project in the future

**Step 1** — create the folder and drop the media in:

```
src/members/abbenisha ann/assets/projects/myproject/
    thumbnail.png
    screenshot1.png
    screenshot2.png
    demo.mp4
```

**Step 2** — add one object to the `projects` array in `data.js`:

```js
{
  id: 'myproject',
  title: 'My New Project',
  shortDescription: 'One line, shown on the card.',
  overview: [
    'First paragraph shown in the modal.',
    'Second paragraph.',
  ],
  features: ['Feature one', 'Feature two'],
  technologies: ['React', 'Three.js'],
  thumbnail: 'assets/projects/myproject/thumbnail.png',
  screenshots: [
    'assets/projects/myproject/screenshot1.png',
    'assets/projects/myproject/screenshot2.png',
  ],
  video: 'assets/projects/myproject/demo.mp4',
},
```

That is all. **Do not edit `Projects.jsx`** — the new card appears by itself.

## 10. Files modified

### My portfolio — `src/members/abbenisha ann/`

| File | What it does |
| --- | --- |
| `data.js` | All my content. **The only file to edit for content.** |
| `About.jsx` | Summary, education, career interests, achievements |
| `Skills.jsx` | Skill groups with category filter tabs |
| `Projects.jsx` | Interactive project gallery |
| `ProjectModal.jsx` | Detail modal (Overview, Key Features, Technologies, Gallery, Video) |
| `Media.jsx` | Renders an image or video, falling back to a placeholder card |
| `Contact.jsx` | Contact details, social links, message form |
| `Portfolio.jsx` | Stacks the four sections into one page |
| `assets.js` | Resolves media files from the assets folder |
| `portfolio.css` | Styling for my section (all classes prefixed `aa-`) |
| `assets/projects/{emomaze,dialink,vr}/FILES.txt` | The file names each folder expects |

### Landing page and Three.js scene (my responsibility)

| File | What it does |
| --- | --- |
| `src/components/Landing.jsx` | Group name, title, tagline, intro, scene, team links |
| `src/components/landing.css` | Landing page styling |
| `src/three/Scene.jsx` | The main Three.js scene |
| `src/three/scene.css` | Canvas sizing and the on-screen controls hint |

### Shared files — minimal edits for integration

| File | Change |
| --- | --- |
| `src/App.jsx` | Was the unmodified Vite starter template and could not run (it imported `App.css` and `react.svg`, neither of which exists). Replaced with the router: `/` → Landing, `/abbenisha` → my portfolio. |
| `src/components/Navbar.jsx` | Was an empty file. Now a nav bar that builds its links from `site.members`. |
| `src/components/Footer.jsx` | Was an empty file. Now shows the group name and course. |
| `src/components/layout.css` | New — navbar and footer styling. |
| `src/data/site.js` | Added a `members` array so the navbar and landing page can list member portfolios. Other members add their own entry here. |

### Not touched

`src/components/ContactForm.jsx`, `src/members/kristine elle/*`, and
`src/index.css` were left exactly as they were.

---

## Technical requirements — where they are implemented

All of these live in `src/three/Scene.jsx`:

| Requirement | Implementation |
| --- | --- |
| Five 3D objects | Torus knot, icosahedron, octahedron, dodecahedron, cube |
| Two animations | Continuous self-rotation, and a sinusoidal float |
| Two lighting techniques | Ambient fill, directional key light with shadows, and a pulsing point light (three in total) |
| One textured object | The cube, using a procedurally generated canvas texture |
| Mouse interaction | Hover highlights and scales a shape; click toggles a spin boost; drag orbits, scroll zooms |
| Keyboard interaction | Arrow keys steer the rig; Space pauses and resumes the animation |
| Camera navigation | `OrbitControls`, with auto-rotate and zoom limits |

The scene needs no external model or image file — the texture is generated in
code, so there is nothing extra to download or commit.

---

## About Us section (landing page)

The team showcase renders from `teamMembers` in **`src/data/site.js`**. Nothing is
hardcoded in the component, so each teammate edits only their own object.

**Profile photos** go in `src/assets/team/`:

```
src/assets/team/abbenisha.jpg
src/assets/team/kristine.jpg
src/assets/team/hanani.jpg
src/assets/team/izzaty.jpg
```

Square images work best (at least 400 × 400). A member with no photo file shows
an initials avatar instead — the layout never breaks.

**For a teammate to go live**, they change two things and touch nothing else:

1. In `site.js`, edit their own entry (`name`, `role`, `programme`,
   `shortDescription`) and set `ready: true`.
2. In `src/App.jsx`, add their route:
   `<Route path="/kristine" element={<KristinePortfolio />} />`

Until then their route resolves to a neutral page rather than a broken link.

## Notes

- The contact form has no backend. On a valid submit it opens the visitor's mail
  client with the message pre-filled and addressed to `abbenishaann20@gmail.com`.
  If you later want it to send silently, plug in a service such as EmailJS or
  Formspree inside `handleSubmit` in `Contact.jsx`.
- `npm run build` prints a chunk-size warning. That is just the Three.js library
  being large; it is a warning, not an error, and the build succeeds.
