import React from 'react';
import { Animated } from 'react-native';

/**
 * useAnimations
 * - mantém um Map de Animated.Value por id
 * - getAnimationForId(id) -> Animated.Value (cria se necessário)
 * - animateIn(id)
 * - animateOut(id, callback)
 */
export function useAnimations() {
  const animacoesRef = React.useRef(new Map()).current;

  const getAnimationForId = (id) => {
    if (!animacoesRef.has(id)) {
      animacoesRef.set(id, new Animated.Value(0));
    }
    return animacoesRef.get(id);
  };

  const animateIn = (id, duration = 500) => {
    const anim = getAnimationForId(id);
    Animated.timing(anim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = (id, callback, duration = 300) => {
    const anim = getAnimationForId(id);
    Animated.timing(anim, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start(() => {
      if (callback) callback();
      animacoesRef.delete(id);
    });
  };

  return {
    getAnimationForId,
    animateIn,
    animateOut,
  };
}
