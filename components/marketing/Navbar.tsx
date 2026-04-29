'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const items = [
    { href: '/courses', label: t.nav.courses },
    { href: '/pricing', label: t.nav.pricing },
    { href: '/blog', label: t.nav.blog },
    { href: '/contact', label: t.nav.contact }
  ];
  return <header className='sticky top-0 z-40 border-b border-white/20 bg-slate-950/55 backdrop-blur-xl'><div className='container-p flex h-18 items-center justify-between text-white'><Link href='/' className='text-xl font-bold tracking-tight'>LMS Pro BD</Link><nav className='hidden md:flex items-center gap-7'>{items.map(i=><Link key={i.href} href={i.href} className='text-sm text-white/85 hover:text-white'>{i.label}</Link>)}</nav><div className='hidden md:flex items-center gap-3'><button onClick={()=>setLang(lang==='en'?'bn':'en')} className='rounded-full border border-white/30 px-3 py-1 text-xs'>{lang.toUpperCase()}</button><Link href='/pricing' className='rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-semibold shadow-premium'>{t.nav.demo}</Link></div><button onClick={()=>setOpen(!open)} className='md:hidden'>{open?<X/>:<Menu/>}</button></div>{open&&<motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} className='container-p pb-4 text-white md:hidden'>{items.map(i=><Link key={i.href} href={i.href} className='block py-2' onClick={()=>setOpen(false)}>{i.label}</Link>)}<button onClick={()=>setLang(lang==='en'?'bn':'en')} className='mt-2 rounded-full border border-white/30 px-3 py-1 text-xs'>{lang.toUpperCase()}</button></motion.div>}</header>;
}
