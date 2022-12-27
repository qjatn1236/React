import React from 'react';
import axios from 'axios';
import resultData from '../../data/selfcheck.json';
import { useState, useEffect } from 'react';

const SelfcheckView = () => {
	const [data, setData] = useState(resultData.data);
  const [question, setQuestion] = useState(resultData.question);
  const [result, setResult] = useState([]);
  const [code, setCode] = useState([0,0,0,0]);
  const [stringCode, setStringCode] = useState(String(code));
  const [text, setText] = useState(['case','result1','result2','description1','description2', 'button' ]);

  //체크박스 체크 할 때 실행함수
  function getCheckboxID(event) {
    if(event.target.checked) {
      //체크하면 result배열에 추가
      setResult(result.concat(event.target.id));
    }else {
      //체크풀면 result배열에서 삭제
      setResult(result.filter(result => result !== event.target.id));
    }
  }

  //결과보기 버튼 클릭 시 실행함수
  function printResult() {
    //고른 체크박스 id배열 출력
    console.log(result);
    //신뢰도 영역 체크 갯수
    const resultOne = (result.filter(sectionOne)).length;
    //쉽게쓰기 영역 체크 갯수
    const resultTwo = (result.filter(sectionTWo)).length;
    //일관되게 영역 체크 갯수
    const resultThree = (result.filter(sectionThree)).length;
    //고객관점 영역 체크 갯수
    const resultFour = (result.filter(sectionFour)).length;

    console.log('신뢰도(호감): '+resultOne);
    console.log('쉽게쓰기: '+resultTwo);
    console.log('일관되게: '+resultThree);
    console.log('고객관점: '+resultFour);

    //초기 코드
    // const code = [0,0,0,0];

    //코드 만드는 함수
    function resultCode() {
      let newcode = [...code];
      //신뢰도 영역 체크 갯수 0이면 코드 0
      if(resultOne === 0) {
        newcode[0] = 0;
      }
      //신뢰도 영역 체크 갯수 1이상이면 코드 1
      if(resultOne !== 0) {
        newcode[0] = 1;
      }
      //쉽게쓰기 영역 체크 갯수 0,1이면 코드 0
      if(resultTwo === 0 || resultTwo === 1) {
        newcode[1] = 0;
      }
      //쉽게쓰기 영역 체크 갯수 2이상이면 코드 1
      if(resultTwo !== 0 && resultTwo !== 1) {
        newcode[1] = 1;
      }
      //일관되게 영역 체크 갯수 0이면 코드 0
      if(resultThree === 0) {
        newcode[2] = 0;
      }
      //일관되게 영역 체크 갯수 1이상이면 코드 1 
      if(resultThree !== 0) {
        newcode[2] = 1;
      }
      //고객관점 영역 체크 갯수 0이면 코드 0
      if(resultFour === 0) {
        newcode[3] = 0;
      }
      //고객관점 영역 체크 갯수 1이상이면 코드 1
      if(resultFour !== 0) {
        newcode[3] = 1;
      }
     
      setCode(newcode);
      setStringCode(String(newcode));
    } 

    resultCode();
    //resultPop();
        document.querySelector('.resultWrap').style.display = 'block';
  }

  //신뢰도(호감)영역
  function sectionOne(el) {
    if(el === 'checkbox1' || el === 'checkbox9') {
      return true;
    }
  }
  //쉽게쓰기 영역
  function sectionTWo(el) {
    if(el === 'checkbox2' || el === 'checkbox5' || el === 'checkbox7' || el === 'checkbox10') {
      return true;
    }
  }
  //일관되게 영역
  function sectionThree(el) {
    if(el === 'checkbox3' || el === 'checkbox6') {
      return true;
    }
  }
  //고객관점 영역
  function sectionFour(el) {
    if(el === 'checkbox4' || el === 'checkbox8') {
      return true;
    }
  }

  // 결과창 데이터 출력 
  useEffect(()=>{
    let newText = [...text];
    if(stringCode ==='1,1,1,1'){
      newText= [data[0].case,data[0].result1,data[0].result2, data[0].description1, data[0].description2,data[0].button];
    }
    if(stringCode ==='1,1,1,0'){
      newText= [data[1].case,data[1].result1,data[1].result2, data[1].description1, data[1].description2,data[1].button];
    }
    if(stringCode ==='1,1,0,1'){
      newText= [data[2].case,data[2].result1,data[2].result2, data[2].description1, data[2].description2,data[2].button];
    }
    if(stringCode ==='1,0,1,1'){
      newText= [data[3].case,data[3].result1,data[3].result2, data[3].description1, data[3].description2,data[3].button];
    }
    if(stringCode ==='0,1,1,1'){
      newText= [data[4].case,data[4].result1,data[4].result2, data[4].description1, data[4].description2,data[4].button];
    }
    if(stringCode ==='0,0,1,1'){
      newText= [data[5].case,data[5].result1,data[5].result2, data[5].description1, data[5].description2,data[5].button];
    }
    if(stringCode ==='1,0,0,1'){
      newText= [data[6].case,data[6].result1,data[6].result2, data[6].description1, data[6].description2,data[6].button];
    }
    if(stringCode ==='1,1,0,0'){
      newText= [data[7].case,data[7].result1,data[7].result2, data[7].description1, data[7].description2,data[7].button];
    }
    if(stringCode ==='0,0,0,1'){
      newText= [data[8].case,data[8].result1,data[8].result2, data[8].description1, data[8].description2,data[8].button];
    }
    if(stringCode ==='1,0,0,0'){
      newText= [data[9].case,data[9].result1,data[9].result2, data[9].description1, data[9].description2,data[9].button];
    }
    if(stringCode ==='0,0,0,0'){
      newText= [data[10].case,data[10].result1,data[10].result2, data[10].description1, data[10].description2,data[10].button];
    }
    if(stringCode ==='0,1,1,0'){
      newText= [data[11].case,data[11].result1,data[11].result2, data[11].description1, data[11].description2,data[11].button];
    }
    if(stringCode ==='0,1,0,1'){
      newText= [data[12].case,data[12].result1,data[12].result2, data[12].description1, data[12].description2,data[12].button];
    }
    if(stringCode ==='1,0,1,0'){
      newText= [data[13].case,data[13].result1,data[13].result2, data[13].description1, data[13].description2,data[13].button];
    }
    if(stringCode ==='0,0,1,0'){
      newText= [data[14].case,data[14].result1,data[14].result2, data[14].description1, data[14].description2,data[14].button];
    }
    if(stringCode ==='0,1,0,0'){
      newText= [data[15].case,data[15].result1,data[15].result2, data[15].description1, data[15].description2,data[15].button];
    }
    setText(newText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])


	return (
    <>
      <div className='selfcheckWrap'>
        <div className='scTitle'>
          <h3>고객언어 감수성 자가진단</h3>
          <h1>당신의 글쓰기는 어떤 유형인가요?</h1>
          <p>질문을 읽고, 해당하는 경우 ✔ 에 체크해주세요.</p>
        </div>
        <div className='scQuestion'>
          {question.map(function (question, index) {
            return(
              <div className={`qlist qlist_${index + 1}`} key={index + 1}>
                <div className='qlistInner'>
                  <strong>{question.text1}</strong>
                  <span>{question.ex}</span>
                  <p>{question.text2}</p>
                </div>
                <label htmlFor={`checkbox${index + 1}`} className="checkbox">
                  <input type="checkbox" name="checkbox" id={`checkbox${index + 1}`} onChange={getCheckboxID} />
                  <span className='icon'></span>
                </label>
                <br/>
              </div>
            );
          })}
        </div>
        <button className='resultBtn' onClick={printResult}>셀프진단 결과보기</button>
      </div>
      <br/>
  		<div className='resultWrap'>
        <div className='dataText'>
          <p className='case'>{text[0]}</p>
          <p className='result'>
            {text[1]}
            <br />
            {text[2]}
          </p>
          <br />
          <p className='description'>
            {text[3]}
            <br />
            {text[4]}
            <br />
            [{text[5]}]를 눌러 든든한 조력자를 만나보세요.
          </p>
          <br />
          <button>{text[5]}</button>
        </div>
  		</div>
    </>
	);
};
export default SelfcheckView;
