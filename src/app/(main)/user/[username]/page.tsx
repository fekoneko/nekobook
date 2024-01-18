import { Metadata } from 'next';

interface Params {
  username: string;
}

export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => ({
  title: `${decodeURIComponent(params.username)} - Nekobook`,
});

interface UserPageProps {
  params: Params;
}
const UserPage = ({ params }: UserPageProps) => {
  return (
    <>
      <h1>{decodeURIComponent(params.username)}&apos;s Page</h1>
    </>
  );
};
export default UserPage;
