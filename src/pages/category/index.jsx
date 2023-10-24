import { useParams } from "react-router-dom";
import Tracklist from "../../components/TrackList/TrackList";
import { useGetCategoryQuery } from "../../api/apiUserActions";

export default function CategoryPage() {
  const params = useParams();

  const { data, error, isLoading } = useGetCategoryQuery({
    id: params.id,
  });

  const tracks = data?.items || [];
  const name = data?.name || "";

  return (
    <Tracklist
      tracks={tracks}
      error={error}
      loading={isLoading}
      showSearchBar={false}
      title={name}
    />
  );
}
