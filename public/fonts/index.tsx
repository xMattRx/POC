import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    {
      path: './Roboto-Light.ttf',
      weight: '100',
    },
    {
      path: './Roboto-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './Roboto-Light.ttf',
      weight: '300',
    },
    {
      path: './Roboto-Regular.ttf',
      weight: '400',
    },
    {
      path: './Roboto-Medium.ttf',
      weight: '500',
    },
    {
      path: './Roboto-Semibold.ttf',
      weight: '600',
    },
    {
      path: './Roboto-Bold.ttf',
      weight: '700',
    },
    {
      path: './Roboto-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './Roboto-Black.ttf',
      weight: '900',
    },
  ],
})