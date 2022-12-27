import React from "react";

/********** 톤 오브 보이스  > 톤 오브 보이스 차트 **********/

const ToneList2 = () => {
  return (
    <div className="subPage">
      <h2 className="pageTitle">톤 오브 보이스 차트</h2>
      <p className="pageDescription">
        각 톤별 커뮤니케이션 표현 방법을 안내하는 톤 차트로, 이용 상황에 맞게
        하나원큐 콘텐츠에 적용합니다.
      </p>

      <div className="pagetableBox">
        <table>
          <tbody>
            <tr>
              <th>톤오브보이스</th>
              <th>커뮤니케이션 톤</th>
              <th>피해야 할 표현</th>
            </tr>
            <tr>
              <td>
                Clear
                <br />
                분명하고 간결한
              </td>
              <td>
                <ul>
                  <li className="listTitle">
                    편리한 이용과 빠른 의사결정을 돕도록 간결하고 명확하게
                    표현합니다.
                  </li>
                  <li>핵심적인 내용만 짧고 명확하게 안내합니다.</li>
                  <li>
                    손님이 꼭 알아야 하는 유익한 정보를 간결하게 안내합니다.
                  </li>
                  <li>핵심적인 내용만 짧고 명확하게 안내합니다.</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>과도하게 사무적인 표현</li>
                  <li>길게 늘어지는 표현</li>
                  <li>어려운 한자어, 행정용어</li>
                  <li>은행 내부용어, 설명 없는 전문용어</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Connective
                <br />
                바로 연결하는
              </td>
              <td>
                <ul>
                  <li className="listTitle">
                    편안한 사용 여정을 지원할 수 있도록 쉽고 직관적으로
                    표현합니다.
                  </li>
                  <li>
                    손님이 주체가 되는 능동적 표현, 일상에서 쓰는 쉬운 표현을 적극
                    활용합니다.
                  </li>
                  <li>
                    손님에게 익숙하고 직관적인 표현으로 막힘없는 여정을
                    지원합니다.
                  </li>
                  <li>
                    문제점을 정확히 안내하고, 손님의 다음 행동을 예측해 바로
                    연결합니다.
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>직설적인 명령조 표현</li>
                  <li>은어, 이해가 어려운 합성어</li>
                  <li>실질적 내용이 없는 모호한 표현</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Useful
                <br />
                유용한
              </td>
              <td>
                <ul>
                  <li className="listTitle">
                    손님에게 이로운 가치를 발견해 실질적 혜택을 말합니다.
                  </li>
                  <li>
                    할인, 적립 등 단순 혜택 나열이 아닌, 손님이 얻을 수 있는
                    이익(가치)을 말합니다.
                  </li>
                  <li>
                    혜택을 숫자, 평점, 데이터 등을 활용해 유익한 정보가 되도록
                    전달합니다.
                  </li>
                  <li>손님 불편 상황에는 분명한 해결책을 제시합니다.</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>배려 없는 부정적 표현</li>
                  <li>해결책 없는 사과/양해 표현</li>
                  <li>근거 없이 최고, 최상 등의 표현 남발</li>
                  <li>(원치 않는)알 필요 없는 정보 노출</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToneList2;
