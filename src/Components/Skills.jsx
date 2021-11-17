import React,{useState, useEffect} from 'react'
import classes from "./Skills.module.css"

const Skills = ({props}) => {

    const [style, setStyle] = useState({});

    useEffect(() => {
      const animation = setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${props}%`,
        };
  
        setStyle(newStyle);
      }, 200);
  
      return () => {
        clearTimeout(animation);
      };
    });

    return (
        <div className={classes.progress}>
            <div className={classes.progressBar} style={style}>{props}%</div>
        </div>
    )
}

export default Skills
