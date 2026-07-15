// Resolves team profile photos that actually exist in this folder.
// A member without a photo file falls back to an initials avatar, so the
// layout never breaks.
const photos = import.meta.glob('./*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getTeamPhoto(fileName) {
  if (!fileName) return null
  return photos[`./${fileName}`] ?? null
}

export function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}
