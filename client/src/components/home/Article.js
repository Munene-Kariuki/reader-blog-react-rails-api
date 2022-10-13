import React from 'react'
import './Article.css'

function Article({article}) {
  const {title, user, topic, created_at, story, time} = article


  return (
    <div>
      <hr className='article-hr' />
      <div className='profile'>
        <img className='profile_image' src={user.profile_image} alt='DP' />
        <h4 className='username'>{user.username}</h4>
        <p className='date_created'>• {created_at.substring(0, 10)}</p>
      </div>
      <div className='content'>
        <h3 className='title'>{title}</h3>
        <p className='story'>{story.substring(0, 300)}...</p>
      </div>
      <div className='btns'>
        <button className='btn'>{topic}</button>
        <button className='btn'>{time} minutes read</button>
      </div>
    </div>
  )
}

export default Article