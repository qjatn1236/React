import React from 'react';
import LinkItem from "@atoms/LinkItem";
import TextItem from "@atoms/TextItem";
import './style.scss';

const MenuListBox = (props) => {

  const { menuData } = props;
  
  return (
    <div className="menuListBox">
      <>
        {Object.values(menuData).map((menuItem, index) => (
          <LinkItem
            key={index}
            className="menuItem"
            goTo={menuItem.link}
            goToText={
              <>
                <img src={menuItem.iconSrc} alt={menuItem.text} />
                <TextItem text={menuItem.text} />
              </>
            }
            onClick={() => setIsOpen(!isOpen)}
          />
        ))}
      </>
      <TextItem
      className="copyright"
      text="© Yepple All Rights Reserved"
      />
    </div>
  );
};

export default MenuListBox;