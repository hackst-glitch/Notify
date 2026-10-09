import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  Text,
  StyleSheet,
  AccessibilityInfo,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { darkTheme } from '@/theme';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    let isMounted = true;

    AccessibilityInfo.isReduceMotionEnabled().then((reduceMotion) => {
      if (!isMounted) return;

      if (reduceMotion) {
        fadeAnim.setValue(1);
        scaleAnim.setValue(1);
      } else {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: darkTheme.motion.duration.normal,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: darkTheme.motion.duration.normal,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
        ]).start();
      }
    });

    return () => {
      isMounted = false;
    };
  }, [fadeAnim, scaleAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.logoWrapper}>
          <View style={styles.ambientGlow} />
          <Image
            source={require('../../assets/images/logo-transparent.png')}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="Notify Logo"
          />
        </View>
        <Text style={styles.title}>Notify</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ambientGlow: {
    position: 'absolute',
    width: 172,
    height: 172,
    borderRadius: 86,
    backgroundColor: darkTheme.colors.primary,
    opacity: 0.08,
  },
  logo: {
    width: 172,
    height: 172,
  },
  title: {
    marginTop: darkTheme.spacing.xl,
    color: darkTheme.colors.text,
    fontSize: darkTheme.typography.sizes.headingLarge + 2,
    fontWeight: darkTheme.typography.fontWeights.medium,
    lineHeight: darkTheme.typography.lineHeights.headingLarge + 2,
    letterSpacing: 1.2,
    textAlign: 'center',
  },
});
