export const getCurrentUserId = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage?.getItem('currentUserId') ?? '';
  }
  return '';
};

export const getAge = (dateString: string): number => {
  const today = new Date();
  const dateOfBirth = new Date(dateString);
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const month = today.getMonth() - dateOfBirth.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  return age;
};
