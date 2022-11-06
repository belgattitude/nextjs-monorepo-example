export const getFallbackForLng = (lng, fallbackLng) => {
  if (typeof fallbackLng === 'string') {
    return [fallbackLng];
  }
  if (Array.isArray(fallbackLng)) {
    return fallbackLng;
  }
  if (typeof fallbackLng === 'object') {
    const fallbackList = fallbackLng[lng];
    const fallbackDefault = fallbackLng.default;
    return [...(fallbackList ?? []), ...(fallbackDefault ?? [])];
  }
  if (typeof fallbackLng === 'function') {
    return getFallbackForLng(lng, fallbackLng(lng));
  }
  return [];
};
export const unique = list => Array.from(new Set(list));