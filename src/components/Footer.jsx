import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' role='contentinfo'>
        <div className="footer_inner">
            <div className="footer_text">
                <span>name: Won Jin Hee</span>
                <span>call: 010.5585.5042</span>
            </div>
            <div className="footer_info">
                <div className="left">
                    <div className="title">
                        <a href="/">sign up</a>
                    </div>
                    <p>로그인을 하시면 더 많은 저의 작품을 볼 수 있습니다.</p>
                </div>
                <div className="right">
                    <h3>나의 작품 URL</h3>
                    <ul>
                        <li>
                            <a href="/">1차 포트폴리오</a>
                            <em>이 작품은 처음으로 만든 웹페이지로 반응형은 안되어있습니다.</em>
                        </li>
                        <li>
                            <a href="/">팀 프로젝트 포트폴리오</a>
                            <em>팀을 이루어서 작품을 함께 만들었습니다.</em>
                        </li>
                        <li>
                            <a href="/">2차 포트폴리오</a>
                            <em>메인페이지와 서브페이지를 모두 작업했습니다.</em>
                        </li>
                        <li>
                            <a href="/">리디자인 포트폴리오</a>
                            <em>기존에 있는 웹페이지를 리디자인했습니다.</em>
                        </li>
                        <li>
                            <a href="/">1차 포트폴리오</a>
                            <em>이 작품은 처음으로 만든 웹페이지로 반응형은 안되어있습니다.</em>
                        </li>
                        <li>
                            <a href="/">팀 프로젝트 포트폴리오</a>
                            <em>팀을 이루어서 작품을 함께 만들었습니다.</em>
                        </li>
                        <li>
                            <a href="/">2차 포트폴리오</a>
                            <em>메인페이지와 서브페이지를 모두 작업했습니다.</em>
                        </li>
                        <li>
                            <a href="/">리디자인 포트폴리오</a>
                            <em>기존에 있는 웹페이지를 리디자인했습니다.</em>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>  
  )
}

export default Footer