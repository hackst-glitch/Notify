export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const touchTargets = {
  minHeight: 44,
  minWidth: 44,
} as const;

export type Spacing = typeof spacing;
export type TouchTargets = typeof touchTargets;
