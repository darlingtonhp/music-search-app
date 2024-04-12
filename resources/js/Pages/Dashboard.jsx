export default function Dashboard({
  auth,
  topTracks,
  tracks,
  error, // if any error occurred while fetching Last.fm data
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      {/* Last.fm content */}
      <div className="py-12">
        <h3>Top Tracks</h3>
        <ul>
          {topTracks.map((track, index) => (
            <li key={index}>
              {track.name} by {track.artist}
            </li>
          ))}
        </ul>
      </div>

      <div className="py-12">
        <h3>Latest Music</h3>
        <ul>
          {tracks.data.map((track, index) => (
            <li key={index}>
              {track.name} by {track.artist}
            </li>
          ))}
        </ul>
      </div>
    </AuthenticatedLayout>
  );
}
