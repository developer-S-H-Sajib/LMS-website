import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CourseCard({ course }: { course: any }) {
  return <motion.article whileHover={{ y: -6 }} className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-premium'><div className='h-36 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20'/><div className='p-5'><div className='mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary'>{course.badge}</div><h3 className='font-semibold leading-tight'>{course.title}</h3><p className='mt-1 text-sm text-slate-500'>{course.instructor}</p><p className='mt-2 text-xs text-slate-600'>⭐ {course.rating} • {course.enrolled} enrolled • {course.duration}</p><div className='mt-4 flex items-end justify-between'><div><p className='text-xl font-bold text-primary'>৳{course.price}</p><p className='text-xs text-slate-400 line-through'>৳{course.oldPrice}</p></div><Link className='rounded-xl border px-3 py-2 text-sm hover:bg-slate-50' href={`/courses/${course.slug}`}>Preview</Link></div></div></motion.article>;
}
