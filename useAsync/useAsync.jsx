// 비동기 함수의 로딩, 에러 처리를 하는 데 사용할 수 있는 함수
function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(async (...args) => {
    setPending(true);
    setError(null);
    try {
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  }, [asyncFunction]);

  return [pending, error, wrappedFunction];
}
