import Card from "./Card";
import CourseIcon from "./CourseIcon";
import Tags from "./Tags";
import styles from "./CourseItem.module.css";
import getCourseColor from "../utils/getCourseColor";
import { Link } from "react-router-dom";

const DIFFICULTY = ["입문", "초급", "중급", "고급"];

function CourseItem({ course }) {
  const difficulty = DIFFICULTY[course.difficulty || 0];
  const courseColor = getCourseColor(course.code);
  // 인라인 스타일을 객체로 넣어주기 위해서 만든 코드
  const thumbStyle = {
    borderColor: courseColor,
  };
  return (
    <Card className={styles.courseItem}>
      {/* 인라인 스타일은 무조건 객체로 들어가야 한다. */}
      <div className={styles.thumb} style={thumbStyle}>
        <CourseIcon photoUrl={course.photoUrl} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {/* link 태그의 prop보내는 state기능 */}
          <Link to={`/courses/${course.slug}`} state={{ course }}>
            {course.title}
          </Link>
        </h2>
        <p className={styles.description}>{course.summary}</p>
        <div>
          <Tags values={[course.language, difficulty]} />
        </div>
      </div>
    </Card>
  );
}

export default CourseItem;
