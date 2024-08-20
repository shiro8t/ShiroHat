import { getPostData } from '@/lib/posts';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);
  return { title: postData.title };
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <article className="max-w-2xl mx-auto my-10">
      <h1 className="text-4xl font-bold mb-5">{postData.title}</h1>
      <div className="custom-markdown" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}