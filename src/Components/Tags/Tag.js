<<<<<<< HEAD
import React from 'react'
import "./Tag.css";
import { Ellipse } from 'react-ionicons'

function Tag(props) {
  return (
    <div className='tag'>
        <Ellipse
        color={'#00000'}
        height="10px"
        width="10px"
      />
        {props.text}
    </div>
  )
}

=======
import React from 'react'
import "./Tag.css";
import { Ellipse } from 'react-ionicons'

function Tag(props) {
  return (
    <div className='tag'>
        <Ellipse
        color={'#00000'}
        height="10px"
        width="10px"
      />
        {props.text}
    </div>
  )
}

>>>>>>> 72b503cdd826ba110024b816ad86b2d978906f18
export default Tag