'use client';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';

export default function Navbar(){
  const {lang,switchLang}=useLanguage();
  return <header className='sticky top-0 z-30 border-b bg-white/90 backdrop-blur dark:bg-slate-950/90'><div className='container-p flex h-16 items-center justify-between'><Link href='/' className='font-bold text-xl'>LMS Pro BD</Link><nav className='hidden md:flex gap-6'><Link href='/courses'>Courses</Link><Link href='/pricing'>Pricing</Link><Link href='/blog'>Blog</Link><Link href='/contact'>Contact</Link></nav><div className='flex items-center gap-3'><button onClick={()=>switchLang(lang==='en'?'bn':'en')} className='rounded-full border px-3 py-1 text-sm'>{lang.toUpperCase()}</button><Link href='/pricing' className='rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-white'>Get Demo</Link></div></div></header>
}
