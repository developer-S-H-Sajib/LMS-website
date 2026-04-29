import { revenueData } from '@/data/dashboard';
export default function Page(){return <main className='section'><div className='container-p'><h1 className='text-3xl font-bold capitalize'>admin Dashboard</h1><div className='mt-4 rounded-2xl bg-white p-5 shadow-premium'>Charts/Table demo blocks with localized metrics: {revenueData.length} data points.</div></div></main>}
