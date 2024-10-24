import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';
import { envAwareFetch } from 'src/shared/utils/envAwareFetch';

type THomeProps = {
  blogPosts: BlogPost[];
};

const Home: FC<THomeProps> = ({ blogPosts }) => {
  console.log(blogPosts);
  return (
    <div>
      <h1>Home</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  try {
    // Fetch blog posts from the API
    const blogPosts = await envAwareFetch<BlogPost[]>('/api/blog-posts');
    if (!Array.isArray(blogPosts)) {
      console.error('API did not return an array for blogPosts:', blogPosts);
      return { props: { blogPosts: [] } };
    }
    // Pass the fetched data as props to the page component
    return { props: { blogPosts } };
  } catch (error) {
    console.error('Error fetching blog posts:', error);

    // Handle errors by returning an empty array or other fallback values
    return { props: { blogPosts: [] } };
  }
};

export default Home;
