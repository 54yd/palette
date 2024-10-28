import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';  

const useIsAfterFirstView = () => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref);

  const [isAfterFirstView, setIsAfterFirstView] = useState(false)
  useEffect(() => {
    if (isInView) {
      console.log('First View');
      setIsAfterFirstView(true)
    }
  }, [isInView])

  return [isAfterFirstView,ref] as const;
}

export default useIsAfterFirstView