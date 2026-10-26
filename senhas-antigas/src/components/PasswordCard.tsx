import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { colors, fonts, fontSize, radius, spacing } from '@/theme';
import { avatarColor, avatarInitial } from '@/theme/avatar';

export type PasswordItem = {
  id: string;
  service: string;
  user: string;
  password: string;
};

type Props = {
  item: PasswordItem;
  onCopy: (item: PasswordItem) => void;
};

export function PasswordCard({ item, onCopy }: Props) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCopy(item);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <View style={styles.card}>
      <View style={[styles.avatar, { backgroundColor: avatarColor(item.service) }]}>
        <Text style={styles.avatarText}>{avatarInitial(item.service)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.service} numberOfLines={1}>
          {item.service}
        </Text>
        <Text style={styles.user} numberOfLines={1}>
          {item.user}
        </Text>
      </View>

      <Pressable
        onPress={handleCopy}
        style={({ pressed }) => [
          styles.copyBtn,
          copied && styles.copyBtnDone,
          pressed && { opacity: 0.7 },
        ]}
        hitSlop={8}
      >
        <Feather
          name={copied ? 'check' : 'copy'}
          size={14}
          color={copied ? colors.success : colors.text}
        />
        <Text style={[styles.copyText, copied && { color: colors.success }]}>
          {copied ? 'Copiado' : 'Copiar'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontFamily: fonts.headingMedium,
    fontSize: fontSize.lg,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  service: {
    fontFamily: fonts.headingMedium,
    fontSize: fontSize.lg,
    color: colors.text,
  },
  user: {
    fontFamily: fonts.body,
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  copyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surfaceMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
  },
  copyBtnDone: {
    backgroundColor: 'rgba(74, 124, 89, 0.12)',
  },
  copyText: {
    fontFamily: fonts.bodyMedium,
    fontSize: fontSize.xs,
    color: colors.text,
  },
});