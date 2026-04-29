'use client';
import { useLanguage } from '@/hooks/use-language';
export default function Footer(){const {t}=useLanguage();return <footer className='border-t bg-slate-950 py-10 text-white'><div className='container-p flex flex-col gap-3 md:flex-row md:items-center md:justify-between'><p className='font-semibold'>LMS Pro BD</p><p className='text-sm text-white/75'>{t.footer}</p></div></footer>}
