type Props = {
  title: string
  description: string
  link?: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <article className="border rounded-lg p-4 bg-white">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      {link && (
        <a className="inline-block mt-4 text-indigo-600" href={link} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </article>
  )
}
