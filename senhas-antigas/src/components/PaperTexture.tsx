import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Svg, { Circle, Defs, Pattern, Rect } from 'react-native-svg';

/**
 * Overlay com padrão de pontinhos para dar textura de papel.
 * Fica absoluteFill por cima do fundo, pointerEvents="none".
 */
export function PaperTexture({ style, ...rest }: ViewProps) {
  return (
    <View style={[StyleSheet.absoluteFill, styles.wrap, style]} {...rest}>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
            <Circle cx="1" cy="1" r="0.6" fill="#1F3D5C" opacity="0.15" />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#dots)" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    opacity: 0.35,
    pointerEvents: 'none',
  },
});