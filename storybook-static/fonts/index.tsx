import localFont from "next/font/local";

export const roboto = {
  '100': localFont({
    src: [{ path: './Roboto-Thin.ttf', weight: '100' }],
  }),
  '200': localFont({
    src: [{ path: './Roboto-ExtraLight.ttf', weight: '200' }],
  }),
  '300': localFont({
    src: [{ path: './Roboto-Light.ttf', weight: '300' }],
  }),
  '400': localFont({
    src: [{ path: './Roboto-Regular.ttf', weight: '400' }],
  }),
  '500': localFont({
    src: [{ path: './Roboto-Medium.ttf', weight: '500' }],
  }),
  '600': localFont({
    src: [{ path: './Roboto-SemiBold.ttf', weight: '600' }],
  }),
  '700': localFont({
    src: [{ path: './Roboto-Bold.ttf', weight: '700' }],
  }),
  '800': localFont({
    src: [{ path: './Roboto-ExtraBold.ttf', weight: '800' }],
  }),
  '900': localFont({
    src: [{ path: './Roboto-Black.ttf', weight: '900' }],
  }),
};