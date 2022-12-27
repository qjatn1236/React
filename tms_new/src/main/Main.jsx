import React, { useState } from 'react';
import Search from './../inc/Search';
import Header from './../inc/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Main() {
  const [clientName, setClientName] = useState('하나원큐');
  const menu = ['버튼', '다이얼로그', '툴팁', '텍스트필드', '메시지'];

  // 슬라이더 setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div>{menu[i]}</div>
    )
  };

  const Wrap = styled.div`
		width: 100%;
		.slick-list {
			padding-top: 48px;
			height: 300px;
			text-align: center;
		}
		.slick-prev:before {
			opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
			color: black; // 버튼 색은 검은색으로
			left: 0;
		}
		.slick-prev {
			top: 60%;
			left: 0;
			z-index: 99;
		}
		.slick-next:before {
			opacity: 1;
			color: black;
		}
		.slick-next {
			top: 60%;
			right: 0;
			z-index: 99;
		}
		.slick-dots {
			top: 0;
			padding: 0;
			height: 48px;
			ul {
				li {
					width: 20%;
					margin: 0;
					height: 48px;
					border: 1px solid #000;
					border-right: none;
					&:last-child {
						border-right: 1px solid #000;
					}
					div {
						height: 100%;
						line-height: 48px;
					}
					&.slick-active {
						background-color: #000;
						div {
							color: #fff;
						}
					}
				}
			}
		}
	`;

  return (
    <div className='mainPage'>
      {/* <Header clientName={clientName} /> */}
      <Search />
      <div className='mainWrap'>
        <div className='selfcheckGo'>
          <Link to='components/selfcheck'>셀프체크</Link>
        </div>
        <div id='sec01' className='sec01 section01'>
          <div className='topText'>
            <h1 className='mainTitle'>
              {clientName} <b>글쓰기</b> 사전검색
            </h1>
            <p>찾고싶은 UX라이팅 원칙 또는 권장용어를 입력하세요</p>
          </div>
          <div className='cautionBox'>
            <ul>
              <li>이것만은 꼭 지켜주세요!</li>
              <li>자주틀리는단어</li>
              {/* 슬라이드 영역 */}
              <ul>
                <li>
                  <span>금일</span>오늘
                </li>
                <li>
                  <span>기기</span>휴대폰
                </li>
                <li>
                  <span>에러</span>오류
                </li>
                <li>
                  <span>USIM</span>유심
                </li>
                <li>
                  <span>VAT</span>부가가치세
                </li>
                <li>
                  <span>모바일</span>휴대폰
                </li>
              </ul>
            </ul>
          </div>
          <div className='bottomText'>
            <h3>{clientName} 직원들만을 위한 UX라이팅 검색 솔루션</h3>
            <p>
              기본적인 문법의 오탈자 및 왜래어사용등을 포함하여 {clientName}만의
              고유한
              <br />
              단어들을 DB화하여 직원들에게 제공하는 UX라이팅 솔루션입니다
            </p>
          </div>
        </div>

        {/* 콘텐츠 유형별 */}
        <div id='sec02' className='sec02 section'>
          <div className='cont_wrap'>
            <div id='tabContent' className='tabContent'>
              <div className='slideBox'>
                <Wrap>
                  <Slider {...settings}>
                    <div>
                      <div className='slideWrap'>
                        <div className='slideImg'>
                          <button>
                            <img src='' alt='' />
                          </button>
                        </div>
                        <div className='slideText'>
                          <ul>
                            <li>
                              <button className='fw_700'>버튼종류</button>
                            </li>
                            <li>
                              <button>기본버튼</button>
                            </li>
                            <li>
                              <button>~하기버튼</button>
                            </li>
                            <li>
                              <button>예/아니오버튼</button>
                            </li>
                            <li>
                              <button>여부버튼</button>
                            </li>
                            <li>
                              <button>신청/가입버튼</button>
                            </li>
                            <li>
                              <button>CTA버튼(마케팅)</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='slideWrap'>
                        <div className='slideImg'>
                          <button>
                            <img src='' alt='' />
                          </button>
                        </div>
                        <div className='slideText'>
                          <ul>
                            <li>
                              <button className='fw_700'>다이얼로그</button>
                            </li>
                            <li>
                              <button>타이틀형 팝업</button>
                            </li>
                            <li>
                              <button>본문형 팝업</button>
                            </li>
                            <li>
                              <button>컨펌형 슬라이딩 팝업</button>
                            </li>
                            <li>
                              <button>선택형 슬라이딩 팝업</button>
                            </li>
                            <li>
                              <button>토스트</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='slideWrap'>
                        <div className='slideImg'>
                          <button>
                            <img src='' alt='' />
                          </button>
                        </div>
                        <div className='slideText'>
                          <ul>
                            <li>
                              <button className='fw_700'>툴팁</button>
                            </li>
                            <li>
                              <button>기본형/나열형</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='slideWrap'>
                        <div className='slideImg'>
                          <button>
                            <img src='' alt='' />
                          </button>
                        </div>
                        <div className='slideText'>
                          <ul>
                            <li>
                              <button className='fw_700'>텍스트필드</button>
                            </li>
                            <li>
                              <button>레이블 및 입력창</button>
                            </li>
                            <li>
                              <button>얼럿메세지/도움말</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='slideWrap'>
                        <div className='slideImg'>
                          <button>
                            <img src='' alt='' />
                          </button>
                        </div>
                        <div className='slideText'>
                          <ul>
                            <li>
                              <button className='fw_700'>메시지</button>
                            </li>
                            <li>
                              <button>헤드메시지</button>
                            </li>
                            <li>
                              <button>완료메시지</button>
                            </li>
                            <li>
                              <button>오류메시지</button>
                            </li>
                            <li>
                              <button>해지/이탈방지 메시지</button>
                            </li>
                            <li>
                              <button>이용안내</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </Wrap>
              </div>
            </div>
          </div>
        </div>

        {/* 라이팅 기본원칙 */}
        <div id='sec03' className='sec03 section'>
          <div className='cont_wrap'>
            <div className='subTitle'>
              <p className='smallTitle fw_600'>CHAPTER 1</p>
              <p className='bigTitle fw_700'>UX라이팅 기본원칙</p>
              <p className='description'>
                언어적 메시지의 활용성과 소통의 효율성을 극대화합니다.
              </p>
            </div>
            <div className='cardBox'>
              <ul className='cardList'>
                <li className='cardItem card1'>
                  <button>
                    <div className='textArea'>
                      <p className='top'>1STEP</p>
                      <p className='middle fw_600'>명확하게</p>
                      <p className='bottom'>
                        전문용어/업계(금융)용어는
                        <br />
                        고객 관점에 맞춰 쉽게 표현합니다.
                      </p>
                    </div>
                  </button>
                </li>
                <li className='cardItem card2'>
                  <button>
                    <div className='textArea'>
                      <p className='top'>2STEP</p>
                      <p className='middle fw_600'>간결하게</p>
                      <p className='bottom'>
                        너무 많은 정보를 한 문장에 담으려고
                        <br />
                        하면 복잡하고 어려운 문장이 됩니다.
                      </p>
                    </div>
                  </button>
                </li>
                <li className='cardItem card3'>
                  <button>
                    <div className='textArea'>
                      <p className='top'>3STEP</p>
                      <p className='middle fw_600'>일관되게</p>
                      <p className='bottom'>
                        날짜,시간,금액 등 자주 쓰는
                        <br />
                        단위표기를 통일해서 쓴다.
                      </p>
                    </div>
                  </button>
                </li>
                <li className='cardItem card4'>
                  <button>
                    <div className='textArea'>
                      <p className='top'>4STEP</p>
                      <p className='middle fw_600'>손님관점으로</p>
                      <p className='bottom'>
                        고객이 주체가 되는 능동 표현,
                        <br />
                        혜택을 담은 표현을 사용한다.
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 톤 오브 보이스 */}
        <div div id='sec04' className='sec04 section'>
          <div className='cont_wrap'>
            <div className='subTitle'>
              <p className='bigTitle fw_700'>
                톤오브 보이스
                <button className='pageBtn'></button>
              </p>
              <p className='smallTitle fw_600'>TONE OF VOICE</p>
              <p className='description'>
                메시지에 목소리를 입혀
                <br />
                비언어적 메시지의 공백을 보완합니다.
              </p>
            </div>
            <div className='imgBox'>
              <button>
                <img src='' alt='' />
              </button>
            </div>
            <ul className='pageBox'>
              <li>
                <button>톤오브보이스 이해</button>
              </li>
              <li>
                <button>톤오브보이스 적용</button>
              </li>
              <li>
                <button>톤오브보이스 적용사례</button>
              </li>
              <li>
                <button>메이킹 톤오브보이스</button>
              </li>
              <li>
                <button>톤오브보이스 체크리스트</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
