import { useEffect, useRef } from 'react'

export function usePrevious(trackVal) {
  const ref = useRef();

  useEffect(() => {
    ref.current = trackVal;
  }, [trackVal]);
  
  return ref.current;
}

export function mergeObjects(curObj, newObj){
	return { ...curObj, ...newObj };
}