import { Link } from "react-router-dom";
import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";
import { useState, useEffect } from "react";
import { useMember } from "../contexts/MemberContext";

function UserMenu() {
  const member = useMember();
  console.log(member);
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = (e) => {
    // 버블링 막는 위로가는 함수 막는거
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    // const handleClickOutside = () => alert(123);

    window.addEventListener("click", handleClickOutside);

    // cleanUp함수
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </button>
      {/* 조건부 렌더링 */}
      {isOpen && (
        <ul className={styles.popup}>
          <Link to="/wishlist">
            <li>위시리스트</li>
          </Link>
          <li className={styles.disabled}>회원가입</li>
          <Link to="/login">
            <li>{member ? "로그아웃" : "로그인"}</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
