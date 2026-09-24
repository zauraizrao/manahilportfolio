import './globals.css';
import { Fraunces, DM_Sans } from 'next/font/google';

const fraunces = Fraunces({subsets:['latin'], variable:'--font-fraunces', display:'swap'});
const dmSans = DM_Sans({subsets:['latin'], variable:'--font-dm-sans', display:'swap'});

export const metadata = { title:'Manahil Hassan | Frontend Developer, WordPress Developer & SEO Specialist', description:'Manahil Hassan is a Frontend Developer, WordPress Developer and SEO Specialist who builds websites, improves online visibility, and creates clean, practical digital experiences.', openGraph:{title:'Manahil Hassan | Frontend Developer, WordPress Developer & SEO Specialist',description:'Clean, practical digital experiences across web development, WordPress, SEO and design.',type:'website'}, twitter:{card:'summary_large_image',title:'Manahil Hassan | Frontend Developer, WordPress Developer & SEO Specialist',description:'Web development, WordPress, SEO and design.'} };

export default function RootLayout({children}) { return <html lang="en"><body className={`${fraunces.variable} ${dmSans.variable}`}>{children}</body></html>; }
