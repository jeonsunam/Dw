import { useState } from "react";

function ReviewForm() {
  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(0);
  //   const [content, setContent] = useState("");
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input type="file" accept="image/png, image/jpeg" />
      {/* value값을 확인할려면 onChange를 무조건 넣어줘야한다. */}
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea value={values.content} name="content" onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
