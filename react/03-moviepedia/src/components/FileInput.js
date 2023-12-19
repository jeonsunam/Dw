import { useRef, useEffect, useState } from "react";

function FileInput({ name, value, onChange }) {
  // html의 document.id / document.query 같은 방식 가져오는거
  const inputRef = useRef();
  const [preview, setPreview] = useState({});

  const handleChange = (e) => {
    // files = 파일객체
    const nextFile = e.target.files[0];
    onChange(name, nextFile);
  };

  useEffect(() => {
    // 값이 없을수도 있기 때문에 useEffect 종료
    if (!value) return;
    // ObjectURL(미리보기) = 객체를 사용하여 미리보기 기능을 구현할 수 있다.
    //import 안해도댐 , value = imgUrl, nextPreview = URL이 나온다.
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    // 이미지 태그는 리액트에서 무조건 div로 묶어서 사용해야 한다(그냥 div로 묶어야한다.)
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
}

export default FileInput;
