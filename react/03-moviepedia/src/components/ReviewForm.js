import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

function ReviewForm() {
  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(0);
  //   const [content, setContent] = useState("");
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgUrl: null,
  });

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };

  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };

  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  const handleChange = (name, value) => {
    // 객체를 리턴하기위해서? 소괄호로 감싸야함 컴퓨터는 잘모름
    // setstate는 전에 가지고 있던 값을 가지고 올수 있다 (콜백함수) = prevValues
    setValues((prevValues) => ({
      // 렌더링하기 전에 있던 값을 가져와서 []안에 있는 키 값에 value를 저장한다.
      ...prevValues,
      [name]: value,
    }));
  };

  // value값을 가지고 있는 애들 가져오는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);

    // 위에 방법이 힘들다면 아래 조건문을 사용해서 실행
    // console.log(e.target.files)
    // let name, value;
    // if(e.files !== null) {
    // value = e.target.files[0]
    // }
    // else if(){
    // value = e.target.text;
    // }
    // else {
    // value = e.target.value;
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" value={values.imgUrl} onChange={handleChange} />
      {/* value값을 확인할려면 onChange를 무조건 넣어줘야한다. */}
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        value={values.content}
        name="content"
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
