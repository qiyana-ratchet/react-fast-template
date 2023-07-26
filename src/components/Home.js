import React from 'react';
import {MyDiv} from "./HomeStyle";
import {Link} from "react-router-dom";

// 필요한 코드를 추가하세요
const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/example">Example</Link></li>
        </ul>
      </nav>

      <div>
        <h1>홈페이지</h1>
        <MyDiv>Styled-Component 예시</MyDiv>
      </div>
    </>
  );
};

export default Home;
