'use client';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import CourseCard from '@/components/marketing/CourseCard';
import { courses } from '@/data/courses';
import { useLanguage } from '@/hooks/use-language';

export default function CoursesPage(){const {t}=useLanguage();return <main className='bg-slate-50'><Navbar/><section className='section'><div className='container-p'><h1 className='text-4xl font-bold'>{t.allCourses}</h1><div className='my-5 grid gap-3 md:grid-cols-4'><select className='rounded-xl border p-3'><option>All Category</option></select><select className='rounded-xl border p-3'><option>Any Price</option></select><select className='rounded-xl border p-3'><option>Any Language</option></select><select className='rounded-xl border p-3'><option>Any Level</option></select></div><div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>{courses.map(c=><CourseCard key={c.slug} course={c}/>)}</div></div></section><Footer/></main>}
