import { colors } from './colors';

export function avatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(hash) % colors.avatar.length;
  return colors.avatar[idx];
}

export function avatarInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase() || '?';
}