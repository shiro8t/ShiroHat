import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-2xl mx-auto my-10">
      <section>
        <h1 className="text-4xl font-bold mb-5">ShiroHat</h1>
        <ul className="space-y-5">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="border-b border-gray-200 pb-2.5">
              <Link href={`/posts/${id}`} className="text-xl font-semibold text-[#007bff] hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-400">{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}