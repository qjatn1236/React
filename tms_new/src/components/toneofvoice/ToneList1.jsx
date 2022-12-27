import React from "react";

/********** 톤 오브 보이스  > 톤 오브 보이스의 이해 **********/

const ToneList1 = () => {
  return (
    <div className="subPage">
      <h2 className="pageTitle">톤 오브 보이스 정의</h2>
      <p className="pageDescription">
        톤오브보이스는 브랜드와 고객이 커뮤니케이션하는 언어적 표현 방식으로{" "}
        <br />
        하나원큐와 손님을 밀접하게 연력하고 더 친근하게 소통하도록 합니다.
      </p>
      <div className="pageImgBox">
        <img src="" alt="" />
      </div>

      <h2 className="pageTitle">역할 및 효과</h2>
      <p className="pageDescription">
        톤오브보이스는 손님과의 긍정적인 관계 구축을 지원해 하나원큐 차별화에
        기여합니다.
      </p>
      <div className="pageTextBox">
        <ul>
          <li className="listTitle">
            긍정적인 관계 구축을 지원합니다.
            <ul>
              <li>
                고객의 65%는{" "}
                <u>
                  긍정적인 목소리로 의사소통을 할 때 자신이 더 배려받고 있다고
                  믿습니다.
                </u>{" "}
                *
              </li>
              <li>
                손님을 배려하거나 친근하게 대하는 태도는 손님이 하나원큐와 더
                많은 상호작용을 하도록 유도하여,
                <br />더 많은 고객 니즈(needs)를 해결할 수 있도록 합니다.
              </li>
              <span>
                * 출처: Customer Thermometer, 「1,000 Customers Reveal How to
                Achieve Brand Affinity」
              </span>
            </ul>
          </li>
          <li className="listTitle">
            인간적인 메시지는 신뢰감 형성에 효과적입니다.
            <ul>
              <li>
                <u>사람들은 인간미 있는 대상과 소통하는 것을 좋아하며,</u>{" "}
                자신과 공감할 수 있는 대상에게 친밀감과 신뢰감을 느낍니다.
              </li>
              <li>
                톤오브보이스로 콘텐츠에 인간미를 담으면, 하나원큐에 대한 고객
                신뢰도를 높이는 데 도움이 됩니다.
              </li>
            </ul>
          </li>
          <li className="listTitle">
            하나원큐 차별화에 기여합니다.
            <ul>
              <li>
                톤오브보이스를 갖추고 일관성 있게 사용하면 치열한 경쟁 시장에서
                차별성을 가질 가능성이 더높습니다.
              </li>
              <li>
                <u>개성 있고 일관된 보이스</u>가 담긴 하나원큐 콘텐츠는 차별성과
                호감도를 높입니다.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToneList1;
