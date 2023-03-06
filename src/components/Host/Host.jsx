function Host(props) {
  return (
    <aside className="host-name-pic">
            <div className="host-name">{props.hostName}</div>
            <div className="host-pic">
                <img src={props.hostPic} alt="hôte"/>
            </div>
    </aside>
  )
}

export default Host