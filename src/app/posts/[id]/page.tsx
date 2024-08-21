import { getPostData } from '@/lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);
  return { title: postData.title };
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="max-w-4xl mx-5 md:mx-auto my-10">
      <article className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="select-none bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 h-40 flex items-center justify-center text-6xl space-x-4">
          <p>🌟</p>
          <p>✨</p>
          <p>🚀</p>
        </div>
        <div className="p-[32px] sm:p-[50px] space-y-[32px]">
          <h1 className="text-5xl font-extrabold leading-tight">{postData.title}</h1>
          <div className="prose lg:prose-xl prose-gray max-w-none custom-markdown" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <div className="bg-gray-50 px-[32px] py-5 border-t border-gray-200 flex items-center justify-between">
          <Link href="/" className="text-blue-500 flex items-center space-x-0.5 rounded-full hover:bg-blue-100 px-2.5 py-0.5"><FiArrowLeft /><p className="hidden md:block">Back to home</p></Link>
          <span className="text-gray-500 text-sm">Published on {new Date().toLocaleDateString()}</span>
        </div>
      </article>
    </div>
  );
}