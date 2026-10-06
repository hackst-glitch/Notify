import { lightColors, darkColors, statusColors, notificationLevels, ThemeColors } from './colors';
import { typography, Typography } from './typography';
import { spacing, touchTargets, Spacing, TouchTargets } from './spacing';
import { radii, Radii } from './radii';
import { motion, Motion } from './motion';

export interface Theme {
  colors: ThemeColors;
  statusColors: typeof statusColors;
  notificationLevels: typeof notificationLevels;
  typography: Typography;
  spacing: Spacing;
  touchTargets: TouchTargets;
  radii: Radii;
  motion: Motion;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: lightColors,
  statusColors,
  notificationLevels,
  typography,
  spacing,
  touchTargets,
  radii,
  motion,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: darkColors,
  statusColors,
  notificationLevels,
  typography,
  spacing,
  touchTargets,
  radii,
  motion,
  isDark: true,
};

// Dark mode is default
export const defaultTheme = darkTheme;

export {
  lightColors,
  darkColors,
  statusColors,
  notificationLevels,
  typography,
  spacing,
  touchTargets,
  radii,
  motion,
};
