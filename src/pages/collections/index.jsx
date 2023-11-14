import { useGetMyPlaylistQuery } from "../../api/apiUserActions";
import { useAuthSelector } from "../../auth";
import Tracklist from "../../components/TrackList/TrackList";

export default function CollectionsPage() {
  const auth = useAuthSelector();
  const { data, error, isLoading, isLiked } = useGetMyPlaylistQuery({ auth });

  return (
    <Tracklist
      tracks={data}
      error={error}
      loading={isLoading}
      showTracksLiked={true}
      showSearchBar={false}
      isLiked={true}
      title="Мои треки"
    />
  );
}
