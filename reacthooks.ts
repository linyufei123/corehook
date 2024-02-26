
/**
 *
 * 本文件用于：基于react-hook封装的hooks 
 * 
 */

import { useState, useCallback, useEffect, useRef } from 'react'

/**
 * @description       useUpdateEffect 组件首次加载不做任何处理，用于 props 或者state更新用
 * @TODO              更据实际情况，调用hook
*/
const useUpdateEffect = (effect, deps) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
}


/**
 * @description       监听窗口大小变化
 * @TODO              更据实际情况，调用hook
*/
const useWinSize = () => {

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []);

  return size;

}

export {
  useUpdateEffect,
  useWinSize,
} 