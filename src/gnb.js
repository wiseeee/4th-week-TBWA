/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
import { $ } from './utils/utils.js';

const initGNB = () => {
  function makeHtml() {
    if (matchMedia('screen and (min-width: 786px)').matches) {
      return `
        <nav class="desktopTopNav">
          <ul class="flexBox flexEnd">
            <li><a class="topNavAnchor gnbATag" href="/account/login/?next=/">로그인</a></li>
            <li>
              <a class="topNavAnchor leftBar gnbATag" href="#">
                <span>회원가입</span>
                <span style="color: #46cfa7">(1000포인트 지급!)</span>
              </a>
            </li>
            <li><a class="topNavAnchor leftBar gnbATag" href="/faq">꾸까 고객센터</a></li>
            <li>
              <a
                class="topNavAnchor leftBar gnbATag"
                href="https://partners.kukka.kr/?utm_source=kukka&utm_medium=affiliate&utm_campaign=kukka&utm_content=partners"
              >
                가입제휴
              </a>
            </li>
          </ul>
        </nav>
        <nav class="desktopBottomNavWrapper">
          <div class="desktopBottomNav">
            <div class="flexBox spaceBetween" style="width: 100%">
              <div>
                <a href="/" class="gnbATag">
                  <img class="headerKukkaIcon" src="../public/img/kukkaDeskTopLogo.png" alt="kukka 로고" />
                </a>
              </div>
              <ul class="flexBox" style="margin: 16px 36px; padding: 0">
                <li>
                  <a class="navAnchor gnbATag" href="#video"><span class="desktopHeaderTag">꽃 정기구독</span></a>
                </li>
                <li>
                  <a class="navAnchor gnbATag" href="/shop/flowers/"><span class="desktopHeaderTag">꽃다발</span></a>
                </li>
                <li>
                  <a class="navAnchor gnbATag" href="/shop/quick/"><span class="desktopHeaderTag">당일배송</span></a>
                </li>
                <li>
                  <a class="navAnchor gnbATag" href="#image"><span class="desktopHeaderTag">플라워클래스</span></a>
                </li>
                <li>
                  <a class="navAnchor gnbATag" href="/item/all/"><span class="desktopHeaderTag">소품샾</span></a>
                </li>
                <li>
                  <a class="navAnchor gnbATag" href="/event"><span class="desktopHeaderTag">이벤트</span></a>
                </li>
              </ul>
              <div style="margin-top: 8px">
                <a href="/" class="gnbATag">
                  <img class="headerNavIcon" src="../public/img/people.png" alt="마이페이지 로고" />
                </a>
                <a href="/cart/?next=/" class="func cart gnbATag">
                  <img class="headerNavIcon" src="../public/img/basket.png" alt="장바구니 아이콘" />
                </a>
              </div>
            </div>
          </div>
          <div class="bottomYellowLine"></div>
        </nav>
      `;
    }
    return `
      <nav class="mobileTopNav">
        <ul class="flexBox spaceBetween" style="margin: 0">
          <li>
            <a href="/" class="gnbATag">
              <img class="headerKukkaIcon" src="../public/img/kukkaMobileLogo.png" alt="kukka 로고" />
            </a>
          </li>
          <li>
            <a href="/cart/?next=/" class="func cart gnbATag">
              <img class="headerNavIcon" src="../public/img/basket.png" alt="장바구니 아이콘" />
            </a>
          </li>
        </ul>
      </nav>
      <nav class="mobileBottomNav">
        <ul class="mobileHeader">
          <li style="margin-top: 10px"><a class="navAnchor mobileHeaderTag gnbATag" href="/subscription/">정기구독</a></li>
          <li style="margin-top: 10px"><a class="navAnchor mobileHeaderTag gnbATag" href="/shop/flower/">꽃다발</a></li>
          <li style="margin-top: 10px"><a class="navAnchor mobileHeaderTag gnbATag" href="/shop/quick/">당일배송</a></li>
          <li style="margin-top: 10px"><a class="navAnchor mobileHeaderTag gnbATag" href="/class/">플라워클래스</a></li>
        </ul>
      </nav>
    `;
  }
  const GNB = $('#gnb');
  GNB.innerHTML = makeHtml();
};

export default initGNB;
