import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";

export default function Index({ user, topTracks }) {
  if (!topTracks) {
    // Tracks data is not yet available null
    return null;
  }

  return (
    <AuthenticatedLayout
      user={user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Your Top Tracks
        </h2>
      }
    >
      <div className="container mx-auto py-8">
        <h3 className="text-lg font-semibold mb-4">Your Top Tracks</h3>
        <ul>
          {topTracks.data.map((topTrack) => (
            <li key={topTrack.id}>
              <div className="flex items-center justify-between">
                <div className="flex-grow">
                  <h4 className="font-semibold">{topTrack.name}</h4>
                  <p>Artist: {topTrack.artist}</p>
                  <p>Album: {topTrack.album}</p>
                  <p>Duration: {topTrack.duration} seconds</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Pagination links={topTracks.meta.links} />
      </div>
    </AuthenticatedLayout>
  );
}
