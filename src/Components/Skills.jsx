

function Skills({course, logo, svg, category}) {



  return (
        <div className="skills">
            {logo === null ? <img src={svg}/> : <i className={logo}></i> }
            <p>{course}</p>
        </div>
  )
}

export default Skills