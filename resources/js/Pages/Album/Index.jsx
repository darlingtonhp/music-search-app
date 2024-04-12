import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link, usePage } from "@inertiajs/react"; // Changed from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ albums }) {
  // Removed unnecessary auth prop

  const { auth } = usePage(); // Retrieve auth user from usePage hook

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Albums" />
      <table>
        <thead>
          <tr>
            <th>Album Name</th>
            <th>Artist</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {albums.data.map((album) => (
            <tr key={album.id}>
              {" "}
              {/* Assuming each album has a unique id */}
              <td>{album.name}</td>{" "}
              {/* Assuming the property names are name, artist, and releaseDate */}
              <td>{album.artist}</td>
              <td>{album.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination links={albums.meta.links} />
    </AuthenticatedLayout>
  );
}
