import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xzyjpio",
        "template_s3rtc15",
        form.current,
        "Bcma2lCAy6Ph6pURj"
      )
      .then(
        (result) => {
          alert("전송되었습니다.");
          closeForm();
        },
        (error) => {
          alert("전송을 실패했습니다.");
        }
      );
  };

  function openForm() {
    document.querySelector('form').style.display='block';
  }
  function closeForm() {
    document.querySelector('form').style.display='none';
  }


  return (
    <footer>
      <button onClick={openForm}>메일보내기</button>
      <form ref={form} onSubmit={sendEmail}>
        <button onClick={closeForm}> X </button>
        <div className="inputWrap">
          <label>Name</label>
          <input type="text" name="from_name" placeholder="이름을 입력해주세요." />
        </div>
        <div className="inputWrap">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="연락처를 입력해주세요." />
        </div>
        <div className="inputWrap">
          <label>Email</label>
          <input type="email" name="email" placeholder="메일 주소를 입력해주세요" />
        </div>
        <div className="inputWrap">
          <label>Message</label>
          <textarea name="text" />
        </div>
        <input type="submit" value="Send" className="send"/>
      </form>
    </footer>
  );
}

export default Footer;
