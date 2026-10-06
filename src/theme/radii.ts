export const radii = {
  button: 12,
  card: 16,
  pill: 9999,
  borderWidth: {
    thin: 0.5,
    normal: 1,
  },
} as const;

export type Radii = typeof radii;
