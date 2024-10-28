'use client'
import React,{ useState, useEffect,} from 'react'
import type { Dispatch } from 'react';
//simport {motion.div} from 'framer-motion'

//fix me Props should be a normal react props type
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mountifyProps:Function = (props: MotionProps) : Object => {
      return _mountify(props, isMounted);
  };

  return [isMounted, setIsMounted, mountifyProps] as const;
};


type MotionProps = Object & {
  initial: Object,
  animate: Object,
  transition: Object,
}

type IsMounted = 
  boolean | 
  Dispatch<React.SetStateAction<boolean>>;

const _mountify = (props: MotionProps, isMounted: IsMounted): Object => {
  return (
    { ...props, animate: isMounted ? props.animate : false }
  )
}



export default useIsMounted;
export { _mountify as mounify }

