export const typography = {
  fontFamily: 'System',
  fontWeights: {
    regular: '400' as const,
    medium: '500' as const,
  },
  sizes: {
    caption: 12,
    small: 13,
    body: 16,
    heading: 20,
    headingLarge: 22,
  },
  lineHeights: {
    caption: 18,
    small: 20,
    body: 24,
    heading: 30,
    headingLarge: 33,
  },
} as const;

export type Typography = typeof typography;
