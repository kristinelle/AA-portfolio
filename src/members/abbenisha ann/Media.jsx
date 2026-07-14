import { getAsset } from './assets.js'

function Placeholder({ label, variant = 'image' }) {
  return (
    <div className={`aa-placeholder aa-placeholder-${variant}`}>
      <span className="aa-placeholder-mark" aria-hidden="true">
        {variant === 'video' ? '▶' : '◱'}
      </span>
      <span className="aa-placeholder-label">{label}</span>
    </div>
  )
}

export function ProjectImage({ path, alt, label = 'Project Screenshot', className = '' }) {
  const src = getAsset(path)

  if (!src) {
    return (
      <div className={className}>
        <Placeholder label={label} />
      </div>
    )
  }

  return <img className={className} src={src} alt={alt} loading="lazy" />
}

export function ProjectVideo({ path, title }) {
  const src = getAsset(path)

  if (!src) {
    return (
      <div className="aa-video">
        <Placeholder label="Project Demonstration Video" variant="video" />
      </div>
    )
  }

  return (
    <video className="aa-video" src={src} controls preload="metadata" title={`${title} demonstration`}>
      Your browser does not support the video tag.
    </video>
  )
}
