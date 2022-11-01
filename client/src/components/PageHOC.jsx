import React from 'react'
import {useNavigate} from 'react-router-dom';
import {logo, heroImg} from '../assets';
import s from '../styles'

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();

  return (
    <div className={s.hocContainer}>
      <div className={s.hocContentBox}>
        <img src={logo} alt="logo" className={s.hocLogo} onClick={()=> navigate('/')} />
      </div>
    </div>
  )
}

export default PageHOC