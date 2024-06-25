import Loader from '@/components/shared/Loader';
import TopCreatorCard from '@/components/shared/TopCreatorCard';
import { useGetAllUsers } from '@/lib/react-query/queriesAndMutations';

const AllUser = () => {
  const { data: creators, isLoading, isError } = useGetAllUsers();
  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="user-container px-10 py-12">
      <h2 className="h3-bold">Top Creators</h2>
      <div className="user-grid">
        {creators?.map((creator)=>(
            <TopCreatorCard creator={creator} key={creator.$id}/>
        ))}
      </div>
    </div>
  );
};

export default AllUser