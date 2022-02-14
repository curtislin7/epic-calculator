import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

export const AboutPage = () => {
  const [count, setCount] = useState(1)
  const [blahDisplay, setBlahDisplay] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    setBlahDisplay(blahDisplay + 'blah')
  }, [count])

  return (
    <div>
      <div>{count} {blahDisplay}</div>
      this app is super ready for production
      <button onClick={()=>setCount(count + 1)}>magic button</button>
      <button onClick={()=>navigate('/')}>please get me out of here</button>
    </div>
  )
}