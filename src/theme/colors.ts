export const lightColors = {
  bg: '#FAF8F5',
  surface: '#FFFFFF',
  border: '#E5E1DA',
  text: '#1F2933',
  textSecondary: '#5B6670',
  primary: '#2B6BFF',
  primaryPressed: '#1D54D6',
  primaryTint: '#E4ECFF',
  onPrimary: '#FFFFFF',
  highlight: '#2B6BFF',
  hintText: '#5B6670',
  pausedText: '#7A6BC4',
} as const;

export const darkColors = {
  bg: '#0A0E1A',
  surface: '#131A2B',
  border: '#1F2A44',
  text: '#EEF2FF',
  textSecondary: '#9AA7C7',
  primary: '#2B6BFF',
  primaryPressed: '#1D54D6',
  primaryTint: '#14234A',
  highlight: '#4DB2FF',
  hintText: '#9CC4FF',
  onPrimary: '#FFFFFF',
  pausedText: '#B8A9E8',
} as const;

export const statusColors = {
  done: '#6BBF8E',
  paused: '#B8A9E8',
  like: '#FF6B8A',
  milestone: '#F7C948',
} as const;

export const notificationLevels = {
  level1: {
    color: '#5B8DEF',
    icon: 'bell',
    label: 'Gentle nudge',
  },
  level2: {
    color: '#F5A524',
    icon: 'bell-ringing',
    label: 'Still waiting',
  },
  level3: {
    color: '#F26B5B',
    icon: 'alert',
    label: 'Needs you now',
  },
} as const;

export type ThemeColors = typeof darkColors | typeof lightColors;
