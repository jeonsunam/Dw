import { createContext, useState } from "react";

// Context가 제공할 기본값을 받는다.
// 사용할려면 useContext(LocaleContext) 사용 해야함
const LocaleContext = createContext();
// children button 컴포넌트에서 children은 '닫기'가 된다. <Button>닫기</Button>;

function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    // 리액트
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
