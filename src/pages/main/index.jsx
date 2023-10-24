import Tracklist from "../../components/TrackList/TrackList";
import { useGetMainPlaylistQuery } from "../../api/apiUserActions";

export default function MainPage() {
  const { data, error, isLoading } = useGetMainPlaylistQuery();

  return <Tracklist tracks={data} error={error} loading={isLoading} />;
}
