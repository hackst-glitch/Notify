export const motion = {
  duration: {
    fast: 150,
    normal: 200,
    slow: 250,
  },
  easing: 'ease-out',
} as const;

export type Motion = typeof motion;
