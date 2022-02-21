/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
import { $ } from './utils/utils.js';

const initGNB = () => {
  function makeHtml() {
    if (matchMedia('screen and (min-width: 786px)').matches) {
      return `
      <nav>
        <ul class="flexBox" style="justify-content: flex-end">
          <li><a class="topNavAnchor" href="/account/login/?next=/">로그인</a></li>
          <li>
            <a class="topNavAnchor leftBar" href="#"
              ><span>회원가입</span><span style="color: #46cfa7">(1000포인트 지급!)</span></a
            >
          </li>
          <li><a class="topNavAnchor leftBar" href="/faq">꾸까 고객센터</a></li>
          <li>
            <a
              class="topNavAnchor leftBar"
              href="https://partners.kukka.kr/?utm_source=kukka&utm_medium=affiliate&utm_campaign=kukka&utm_content=partners"
            >
              가입제휴
            </a>
          </li>
        </ul>
        <div class="flexBox" style="justify-content: center; margin: 32px 16px 64px">
          <div>
            <a href="/">
              <img
                class="headerKukkaIcon"
                src="../public/img/kukkaLogo.png"
                alt="kukka 로고"
                style="width: 167px; height: 22px"
              />
            </a>
          </div>
          <ul class="flexBox" style="margin: 0 24px; padding: 0">
            <li><a class="navAnchor headerTag" href="/subscription/">꽃 정기구독</a></li>
            <li><a class="navAnchor headerTag" href="/shop/flowers/">꽃다발</a></li>
            <li><a class="navAnchor headerTag" href="/shop/quick/">당일배송</a></li>
            <li><a class="navAnchor headerTag" href="/class/">플라워클래스</a></li>
            <li><a class="navAnchor headerTag" href="/item/all/">소품샾</a></li>
            <li><a class="navAnchor headerTag" href="/event">이벤트</a></li>
          </ul>
          <div>
            <a href="/">
              <img class="headerNavIvon" src="../public/img/people.png" alt="마이페이지 로고" />
            </a>
            <a href="/cart/?next=/" class="func cart">
              <img class="headerNavIvon" src="../public/img/basket.png" alt="장바구니 아이콘" />
            </a>
          </div>
        </div>
      </nav>
      `;
    }
    return `
      <nav style="display: flex; justify-content: space-between; margin-top: 15px">
        <a href="/">
          <img src="../public/img/kukkaLogo.png" alt="kukka 로고" style="width: 167px; height: 22px" />
        </a>
        <a href="/cart/?next=/" class="func cart">
          <img src="../public/img/basket.png" alt="장바구니 아이콘" style="width: 21px; height: 23px" />
        </a>
      </nav>
      <nav>
        <ul style="list-style: none; margin-top: 15px; font-size: 11px; display: flex; justify-content: space-between">
          <li><a>정기구독</a></li>
          <li><a>꽃다발</a></li>
          <li><a>당일배송</a></li>
          <li><a>플라워클래스</a></li>
        </ul>
      </nav>
    `;
  }
  const GNB = $('#gnb');
  GNB.innerHTML = makeHtml();
};

export default initGNB;
