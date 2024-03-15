import { Kreon } from "next/font/google";
import localfont from 'next/font/local';

// export const kreon_light = Kreon({weight: "300", subsets: ['latin']});
export const kreon_light = localfont({ src: '../../../public/fonts/kreon/Kreon-Light.ttf' })
// export const kreon = Kreon({weight: "400", subsets: ['latin']});
export const kreon = localfont({ src: '../../../public/fonts/kreon/Kreon-Regular.ttf' })
// export const kreon_bold = Kreon({weight:"500", subsets:['latin']});
export const kreon_bold = localfont({ src: '../../../public/fonts/kreon/Kreon-Bold.ttf' })