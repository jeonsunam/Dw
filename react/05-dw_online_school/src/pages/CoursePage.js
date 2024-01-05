import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import Button from "./../components/Button";
import styles from "./CoursePage.module.css";
import getCourseColor from "../utils/getCourseColor";
import { useEffect, useState } from "react";
import { getData, updateDatas } from "../api/firebase";

function CoursePage() {
  // Link에서 state로 보내면 useLocation으로 받아야 한다.
  // const { course } = useLocation().state;
  const props = useLocation();
  // const { course } = props.state?.course;
  const { pathname } = props;
  const [course, setCourse] = useState();
  const navigate = useNavigate();
  //   경로 확인
  const { courseSlug } = useParams();
  //   console.log(courseSlug);

  // 옵셔널 체이닝? course가 존재하면 코드를 보내겟다
  const courseColor = getCourseColor(course?.code);

  const handleAddWishlistClick = async () => {
    const member = JSON.parse(localStorage.getItem("member"));

    if (member) {
      const result = await updateDatas("member", member.docId, course, {
        type: "ADD",
        fieldName: "courseList",
      });
      if (result) navigate("/wishlist");
    } else {
      alert("로그인 해주세요.");
      navigate("/login", { state: pathname });
    }
  };

  const headerStyle = {
    borderTopColor: courseColor,
  };

  const handleLoad = async () => {
    const result = await getData("courses", "slug", "==", courseSlug);
    setCourse(result);
  };

  // 한번만 실행하기 위해서 useEffect 실행
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    // 프래그먼트
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course?.photoUrl} />
          <h1 className={styles.title}>{course?.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
          <p className={styles.summary}>{course?.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course?.topics.map(({ topic }) => (
          <Card key={topic.slug} className={styles.topic}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
