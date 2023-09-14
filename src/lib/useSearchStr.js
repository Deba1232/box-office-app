import { useEffect, useState } from "react";

const usePersistentSearchStr = (initialValue, sessionStorageKey) => {
  const [searchStr, setSearchStr] = useState(() => {
    const persistentStr = sessionStorage.getItem(sessionStorageKey);

    return persistentStr ? JSON.parse(persistentStr) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(searchStr));
  }, [searchStr, sessionStorageKey]);

  return [searchStr, setSearchStr];
};

export const useSearchStr = () => {
  return usePersistentSearchStr("", "searchString");
};
