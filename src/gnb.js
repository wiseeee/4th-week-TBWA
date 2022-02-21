/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
import { $ } from './utils/utils.js';

const initGNB = () => {
  function makeHtml() {
    if (matchMedia('screen and (min-width: 786px)').matches) {
      return `
      <nav>
        <ul>
          <li><a href="/account/login/?next=/">로그인</a></li>
          <li><a href="#">회원가입</a></li>
          <li><a href="/faq">꾸까 고객센터</a></li>
          <li>
            <a href="https://partners.kukka.kr/?utm_source=kukka&utm_medium=affiliate&utm_campaign=kukka&utm_content=partners"
              >가입제휴</a
            >
          </li>
        </ul>
        <div>
          <div>로고</div>
          <ul>
            <li><a href="/subscription/">꽃 정기구독</a></li>
            <li><a href="/shop/flowers/">꽃다발</a></li>
            <li><a href="/shop/quick/">당일배송</a></li>
            <li><a href="/class/">플라워클래스</a></li>
            <li><a href="/item/all/">소품샾</a></li>
            <li><a href="/event">이벤트</a></li>
          </ul>
          <div></div>
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
