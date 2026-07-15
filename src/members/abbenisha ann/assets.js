// Vite scans the assets folder at build time and returns a map of the media
// files that actually exist. Missing files resolve to null, which lets the UI
// fall back to a styled placeholder instead of a broken image.
const mediaFiles = import.meta.glob(
  './assets/projects/**/*.{png,jpg,jpeg,webp,gif,mp4,webm}',
  { eager: true, query: '?url', import: 'default' },
)

export function getAsset(path) {
  if (!path) return null
  return mediaFiles[`./${path}`] ?? null
}
