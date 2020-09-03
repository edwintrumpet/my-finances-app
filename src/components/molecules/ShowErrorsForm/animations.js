export const defaultStyle = {
  transition: 'opacity 150ms ease-in-out, height 300ms ease-in-out',
  opacity: 0,
  height: 0,
};

export const transitionStyles = {
  entering: { opacity: 1, height: 19 },
  entered: { opacity: 1, height: 19 },
  exiting: { opacity: 0, height: 0 },
  exited: { opacity: 0, height: 0 },
};
