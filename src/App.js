import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';


const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        
      </Routes>
    </BrowserRouter>
  )
}
// BrowswerRouter : 라우팅을 적용하기 위한 컴포넌트입니다. App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있는 명령어 (실행 = 라우팅)

// Routes : 라우터들을 정의하는 컨테이너입니다. 명령어들을 가지고 있다고 보시면 됩니다.

// <Route path='/' element={<HomeView />} /> : '/' 경로에 해당하는 <HomeView /> 컴포넌트를 랜더링하도록 설정

export default App;
// 화살표함수에 넣기
// 하나면 return 안에 div
// 두개이상부터는 return 안에 ()
