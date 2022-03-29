export const getCurrentUserId = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage?.getItem('currentUserId') ?? '';
  }
  return '';
}
