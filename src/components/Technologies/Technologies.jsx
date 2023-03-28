

export const Technologies = ({ tags }) => {
  if (!tags) return null;
  return (
    <>
      {
        tags.map((tag, i) => (
          <span style={{ color: tag.color }} key={i} className='tag'>{<tag.icon />}</span>
        ))

      }
    </>
  )
}