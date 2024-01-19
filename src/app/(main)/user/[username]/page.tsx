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
    <div className="w-full">
      <h1 className="font-bold text-3xl">{decodeURIComponent(params.username)}&apos;s Page</h1>
    </div>
  );
};
export default UserPage;
