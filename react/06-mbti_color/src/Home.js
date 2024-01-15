import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useRef, useState } from "react";
import { getMockItems } from "./lib/api";
import ColorSurvey from "./components/ColorSurvey";

function Home() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);
  const nextPageNum = useRef(null);

  const handleLoad = () => {
    const { data } = getMockItems();
    nextPageNum.current = data.length;
    setItems(data);
  };

  const handleLoadNext = () => {
    // 현재 아이템이 몇번째인지를 알고 있어야 한다.
    // 현재 아이템 이후의 아이템을 가져와서 items State값을 변경해준다.
    const result = getMockItems(nextPageNum.current);
    if (result?.data) {
      setItems((prevItems) => [...prevItems, ...result.data]);
    }
    nextPageNum.current = result ? result.nextItemNum : null;
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!nextPageNum) return;
      // scrollHeight html 높이 전체
      // scrollTop 스크롤을 내렸을 때 안보이는 영역의 높이
      // clientHeight 사용자가 보고 있는 화면 높이
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        handleLoadNext();
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI별
            <br />
            <span className={styles.accent}>좋아하는 컬러</span>
          </h1>
          <div>
            {filter && (
              <div className={styles.filter} onClick={() => setFilter(null)}>
                {filter}
                <img
                  className={styles.removeIcon}
                  src="images/x.svg"
                  alt="필터 삭제"
                />
              </div>
            )}
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/new">
          + 새 컬러 등록하기
        </Link>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
