export const Frontend = ({skill}) => {

  return (
    <>
    {
        skill.map(item => {            
            return (
                <div className='skills-card' key={item.icon} style={{ color: item.color }}>
                         {<item.icon />}
               </div>
             )

        })
    }
    </>
  )
}