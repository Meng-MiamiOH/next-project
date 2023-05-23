import { useRouter } from "next/router";

const FilteredEvetsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData){
    return
  }
  return (
    <div>
      <h1>Filtered Events Page</h1>
    </div>
  );
};

export default FilteredEvetsPage;
