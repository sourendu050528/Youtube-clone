import React from 'react'
import './video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router'

const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
      
    </div>
  )
}

export default Video
