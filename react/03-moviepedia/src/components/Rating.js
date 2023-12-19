const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, rating, onSelect, onHover }) {
  // 클래스를 동적처리 하는 방법 삼항연산자
  const className = `Rating-star ${selected ? "selected" : ""}`;

  const handleClick = () => onSelect(rating);
  const handleMouseOver = () => onHover(rating);

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      ★
    </span>
  );
}

function Rating({ className, hoverRating = 0, onSelect, onHover, onMouseOut }) {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {/* 객체 소괄호 닫기 담을 변수 rating */}
      {RATINGS.map((arrNum) => (
        <Star
          key={arrNum}
          selected={hoverRating >= arrNum}
          rating={arrNum}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export default Rating;
