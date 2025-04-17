type LocalStorageKey = 'access_token';

export function localStorageAction() {
  const get = (key: LocalStorageKey) => localStorage.getItem(key);
  const set = (key: LocalStorageKey, value: string) => localStorage.setItem(key, value);
  const clear = (key: LocalStorageKey) => localStorage.removeItem(key);
  const clearAll = () => localStorage.clear();

  return {
    get,
    set,
    clear,
    clearAll
  };
}
