
const Card = ({name,color}) => {
  return (
    <div className="card text-center" style={{backgroundColor:`${color}`}}>
        <div className="card-body">
            <h5>{name}</h5>
            <hr />
        </div>
    </div>
  )
}

export default Card