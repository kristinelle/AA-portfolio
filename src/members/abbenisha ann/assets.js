// Map verified project assets
const mediaFiles = import.meta.glob(
  './assets/projects/**/*.{png,jpg,jpeg,webp,gif,mp4,webm}',
  { eager: true, query: '?url', import: 'default' },
)

export function getAsset(path) {
  if (!path) return null
  return mediaFiles[`./${path}`] ?? null
}
