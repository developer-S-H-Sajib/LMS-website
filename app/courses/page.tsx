import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import CourseCard from '@/components/marketing/CourseCard';
import { courses } from '@/data/courses';

export default function CoursesPage(){return <main><Navbar/><section className='section'><div className='container-p'><h1 className='text-3xl font-bold'>All Courses</h1><div className='my-4 grid gap-3 md:grid-cols-4'><select className='rounded-xl border p-2'><option>All Category</option></select><select className='rounded-xl border p-2'><option>Any Price</option></select><select className='rounded-xl border p-2'><option>Any Language</option></select><select className='rounded-xl border p-2'><option>Any Level</option></select></div><div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>{courses.map(c=><CourseCard key={c.slug} course={c}/>)}</div></div></section><Footer/></main>}
