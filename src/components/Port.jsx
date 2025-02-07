import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portText } from '../contants';


const Port = () => {
    // 변수를 선언
    const horizontalRef = useRef(null);
    // 변수를 선언하는데 배열로 선언하는 명령어
    const sectionsRef = useRef([]);

    useEffect(() => {
        // gsap.registerPlugin 초기화
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        let scrollTween = gsap.to(sections,{
            xPercent: -120 * (sections.length - 1),
            ease:"none",
            scrollTrigger: {
                trigger: horizontal,
                start: 'top 100px',
                end: () => '+=' + 5000,
                // end: 5000,
                pin: true,
                scrub: 1,
            }
        });
        return()=>{scrollTween.kill()};
    },[])

    return (
        <section id='port' ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">
                    portfolio <em>작업물</em>
                </div>
                <div className="port_wrap">

                    {portText.map((port, key) => (
                        <article
                            className={`port_item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionsRef.current[key] = el)}
                        >
                            <span className='num'>{port.num}</span>
                            <a href={port.url} className='img' target='_blank' rel='noreferrer'>
                                <img src={port.img} alt={port.title} />
                            </a>
                            <h3 className='title'>{port.title}</h3>
                            <p className='desc'>
                                {port.desc}
                            </p>
                            <a href={port.url} target='_blank' className='site' rel='noreferrer'>사이트보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Port
// key={key} : 반복되는 개체에  key값을 넣어주기
// useRef : 변수값 지정
// current : 현재, 현재지정된 값

// Hook 이란?
// 클래스 컴퍼넌트를 함수형 컴퍼넌트로 사용할 수 있도록 해주는 명령어
// 클래스 컴퍼넌트(매우 복잡하고, 이해가 매우 어려워요)

// - 컴포넌트 간의 계층을 바꾸지 않고 상태 로직을 재사용할 수 있게 해주는 명령어
// - 하나의 컴포넌트를 생명주기가 아닌 기능을 긱반으로 하여 기반으로 하여 작은 함수 단위로 나눠서 사용할 수 있도록 해주는 명령어
// - class문법 없이도 react 기능을 사용할 수 있도록 도와주는 명령어

// ------------------------------
// useEffect: 컴포넌트가 렌더링 될때마다 특정 작업을 실행해주는 Hook명령어
// - 컴포넌트가 렌더링 된 후에 실행되는 부수 효과를 정의하는 코드블럭임
// - useEffect 내부에서는 gsap라이브러리의 ScrollTrigger를 등록하고 가로 스크롤 애니메이션을 사용할 수 있도록 한다.

// -------------------------------
// 지금 선택된 값을 변수 horizontal에 대입
// const horizontal = horizontalRef.current;
// 지금 선택된 값을 변수 sections에 대입
// const sections = sectionsRef.current;

// let scrollTween = gsap.to(sections,{
//     xPercent: -120 * (sections.length - 1),
        // x축으로 이동(음수: 왼쪽, 양수: 오른쪽으로 이동)하는 명령어
       // ease:"none",
    //    애니메이션의 속도가 처음부터 끝까지 일정하게(ease:linear)
    // "power1.in" 천천히 시작, 빠르게 종료
    // "power1.out" 빠르게 시작, 천천히 종료
    // "power1.inOut" 천천히 시작 ->  빠름 -> 천천히 종료

 // // })
//  pin: true, : 특정요소를 스크롤 중에 고정
//  scrub: 1 , : 스크롤 내리는 동안 부드럽게 애니메이션을 실행
// true: , 스크롤속도에 맞춰 애니메이션을 실행
// scrollTween.kill(); : 애니메이션을 중단하고 모든 gsap 관련 데이터 제거
// clearprops: "all" : 애니메이션이 적용된 요소의 css속성 값을 초기화
// ,[]: 1번만 실행하고 끝내라는 명령어
