declare global {
  interface Window {
    Supademo: {
      widget: {
        init: (id: string) => void;
        open: (id: string) => void;
        show: () => void;
        hide: () => void;
      };
    };
  }
}

export {};
