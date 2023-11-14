import { useGetMyPlaylistQuery } from "../../api/apiUserActions";
import { useAuthSelector } from "../../auth";
import Tracklist from "../../components/TrackList/TrackList";

export default function CollectionsPage() {
  const auth = useAuthSelector();
  const { data, error, isLoading } = useGetMyPlaylistQuery({ auth });

  return (
    <Tracklist
      tracks={data}
      error={error}
      loading={isLoading}
      showTracksLiked={true}
      showSearchBar={false}
      title="Мои треки"
    />
  );
}
