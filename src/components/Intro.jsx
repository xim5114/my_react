import React from 'react'

import about from '../assets/img/img_about.png'
import about2 from '../assets/img/img_about_2.png'
// 변수

const introText = {
    title:'port developer',
    desc:['talent is','found at the end of the','effort']
}
// [] : 배열 / {}: 개별

const Intro = () => {
  return (
    <section id='intro'>
        <div className="intro_inner">
            <h1 className='intro_title'>
                {/* port developer */}
                {introText.title}
            </h1>
            <div className="intro_lines" aria-hidden='true'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
            <div className="intro_text">
                <div className="text">
                    {/* <div>talent is</div> */}
                    {/* <div>found at the end of the</div> */}
                    {/* <div>effort</div> */}
                    <div>{introText.desc[0]}</div>
                    <div>{introText.desc[1]}</div>
                    <div>{introText.desc[2]}</div>
                </div>
                <div className="img">
                    <img src={about} alt="이미지 넣는 방법" />
                </div>
            </div>
            <div className="intro_lines bottom" aria-hidden='true'>
            <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
        </div>
    </section>
  )
}

export default Intro