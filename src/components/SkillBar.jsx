
export const SkillBar = ({name,level}) => {
  return (
    <div className="row g-0 align-items-center my-2">
            <div className="col-3 skill-name px-3">
                {name}
            </div>
        <div className="progress col-9 rounded-0"
          style={{height:"30px"}}
        > 
            <div 
                className="progress-bar bg-secondary" 
                role="progressbar" 
                style={{width: `${level}%`,
                  
                }} >
            </div>
        </div>
    </div>
  )
}
