import React from "react";
import { Link } from "react-router-dom";

import LineItem from "@atoms/LineItem";
import ImgItem from "@atoms/ImgItem";
import RoomTitleCont from "@organisms/RoomTitleCont";
import RoomTimeLineCont from "@organisms/RoomTimeLineCont";
import "./style.scss";

const HomeRoomList = (props) => {
  const RoomData = props.RoomData;

  return (
    <>
      <div className="homeRoomListWrap">
        {RoomData.map(function (item, index) {
          return (
            <Link className="homeRoomListItem" key={index} to={item.link}>
              <div className="roomImgBox">
                <ImgItem src={item.imgSrc} alt="룸 샘플 이미지" />
              </div>
              <RoomTitleCont
                title={item.title}
                time={item.time}
                peopleCnt={item.peopleCnt}
                favorite={item.favorite}
              />
              <LineItem />
              <RoomTimeLineCont bookingStatus={item.bookingStatus} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomeRoomList;
