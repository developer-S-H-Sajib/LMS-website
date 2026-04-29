import { courses } from '@/data/courses';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';

export default function CourseDetail({params}:{params:{slug:string}}){const c=courses.find(x=>x.slug===params.slug)??courses[0];return <main><Navbar/><section className='section'><div className='container-p grid gap-8 lg:grid-cols-[2fr_1fr]'><div><h1 className='text-3xl font-bold'>{c.title}</h1><div className='mt-5 h-64 rounded-2xl bg-slate-200'/><h3 className='mt-6 text-xl font-semibold'>What you’ll learn</h3><ul className='mt-2 list-disc pl-6'><li>Practical skill roadmap</li><li>Local market strategy</li></ul></div><aside className='sticky top-24 h-fit rounded-2xl bg-white p-5 shadow-premium'><p className='text-2xl font-bold'>৳{c.price}</p><p className='text-sm line-through'>৳{c.oldPrice}</p><button className='mt-3 w-full rounded-xl bg-primary py-2 text-white'>Enroll Now</button></aside></div></section><Footer/></main>}
