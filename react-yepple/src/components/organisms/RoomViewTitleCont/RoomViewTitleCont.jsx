import React from 'react';
import ImgItem from '@atoms/ImgItem'
import RoomTitleCont from '@organisms/RoomTitleCont';

const RoomViewTitleCont = (props) => {
  const {title, imgSrc, time, peopleCnt, favorite} = props;
  return (
    <div className='roomViewTitleWrap'>
      <ImgItem src={imgSrc} alt="룸 샘플 이미지"/>
      <RoomTitleCont title={title} time={time} peopleCnt={peopleCnt} favorite={favorite} />
    </div>
  );
};

export default RoomViewTitleCont;