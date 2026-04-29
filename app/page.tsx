'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import CourseCard from '@/components/marketing/CourseCard';
import PaymentModal from '@/components/marketing/PaymentModal';
import { courses } from '@/data/courses';
import { faqs } from '@/data/faqs';
import { pricingPlans } from '@/data/pricing';
import { useLanguage } from '@/hooks/use-language';

export default function HomePage() {
  const { t } = useLanguage();
  return <main className='bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50'><Navbar/><section className='section pt-20 text-white'><div className='container-p grid items-center gap-10 lg:grid-cols-2'><div><p className='mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs'>{t.trust}</p><h1 className='text-4xl font-bold leading-tight md:text-6xl'>{t.hero.title}</h1><p className='mt-5 max-w-xl text-white/75'>{t.hero.subtitle}</p><div className='mt-8 flex flex-wrap gap-3'><a href='/courses' className='rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold'>{t.hero.explore}</a><a href='/pricing' className='rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold'>{t.hero.cta}</a></div></div><div className='relative rounded-3xl border border-white/20 bg-white/10 p-6 shadow-premium backdrop-blur-xl'><div className='grid grid-cols-3 gap-3'>{t.hero.badges.map((b,idx)=><motion.div key={b} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:idx*0.15}} className='rounded-xl bg-white/15 p-3 text-center text-xs'>{b}</motion.div>)}</div><div className='mt-4 h-64 rounded-2xl bg-gradient-to-br from-white/20 to-transparent'/></div></div></section><section className='section'><div className='container-p'><h2 className='mb-6 text-3xl font-bold text-slate-900'>{t.featured}</h2><div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>{courses.slice(0,8).map(c=><CourseCard key={c.slug} course={c}/>)}</div></div></section><section className='section'><div className='container-p'><h2 className='mb-6 text-3xl font-bold text-slate-900'>{t.pricing}</h2><div className='grid gap-6 md:grid-cols-3'>{pricingPlans.map((p,i)=><motion.div whileHover={{y:-8}} key={p.id} className={`rounded-3xl border bg-white p-6 shadow-premium ${i===1?'scale-105 border-primary ring-2 ring-primary/30':''}`}><p className='font-semibold'>{p.name}</p><p className='my-3 text-4xl font-bold'>{p.price}</p><ul className='space-y-2 text-sm text-slate-600'>{p.features.map(f=><li key={f}>• {f}</li>)}</ul></motion.div>)}</div><div className='mt-8'><PaymentModal/></div></div></section><section className='section'><div className='container-p max-w-3xl space-y-3'>{faqs.map(f=><details key={f.q} className='rounded-xl bg-white p-4 shadow'><summary className='font-medium'>{f.q}</summary><p className='mt-2 text-sm'>{f.a}</p></details>)}</div></section><Footer/></main>;
}
