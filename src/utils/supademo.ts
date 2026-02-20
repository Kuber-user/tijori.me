const DEMO_IDS: Record<string, string> = {
  en: 'cmlcan55l00ojvk0iqv7eswll',
  ar: 'cmlqfl4s6005b0d0iy6mc4t9c',
};

export const openSupademo = (lang: string = 'en') => {
  if (typeof window !== 'undefined' && window.Supademo) {
    window.Supademo.widget.open(DEMO_IDS[lang] || DEMO_IDS.en);
  }
};
