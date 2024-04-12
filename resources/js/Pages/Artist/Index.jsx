import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
export default function ArtistIndex({ topArtists, error }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Top Artists
        </h2>
      }
    >
      <Head title="Top Artists" />

      <div className="py-12">
        <ul>
          {error && <li>{error}</li>}
          {topArtists.map((artist, index) => (
            <li key={index}>{artist.name}</li>
          ))}
        </ul>
      </div>
      <Pagination links={topArtists.meta.links} />
    </AuthenticatedLayout>
  );
}
