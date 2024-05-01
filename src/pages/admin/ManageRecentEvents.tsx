import { TRecentEvent, getRecentEvents } from "@/components/RecentEvent.api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageRecentEvents = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["recent-events"],
    queryFn: getRecentEvents,
  });

  const recentEvents = data?.data?.data;

  const handleDelete = (event: TRecentEvent) => {
    fetch(
      `https://nlwd-b2-assignment-5-server.vercel.app/recent-event/${event?._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${event?.eventName} is Deleted.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (isError) {
    return <p className="text-white">Something went wrong</p>;
  }
  // console.log(isLoading, data);

  return (
    <div>
      <h1 className="md:text-6xl text-2xl font-bold text-center my-10">
        Recent Events
      </h1>
      <p className="md:text-xl px-3 mx-auto text-center md:w-[100ch]">
        Welcome to the 'Recent Events' page of the admin dashboard! Here, you
        can effortlessly manage all the latest events showcased on your website.
        From adding exciting new events to updating existing ones and even
        removing outdated listings, this is your central hub for keeping your
        audience engaged and informed. Let's make every event memorable
        together!
      </p>
      <div className="text-center my-10">
        <Link to="/admin/manage-recentEvents/add-event">
          <Button className="text-black h-12 rounded-xl text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
            <MdAdd className="w-6 h-6 me-1" /> Add an Event
          </Button>
        </Link>
      </div>
      <div className="md:mx-20">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>Table Name</TableHead>
              <TableHead>Arranged By</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentEvents?.map((event: TRecentEvent) => (
              <TableRow key={event._id}>
                <TableCell>
                  <img className="w-full h-12" src={event?.imgUrl} alt="" />
                </TableCell>
                <TableCell className="">{event?.eventName}</TableCell>
                <TableCell className="">{event?.arrangedBy}</TableCell>
                <TableCell className="text-right  space-x-3">
                  <Link
                    to={`/admin/manage-recentEvents/updateEvent/${event?._id}`}
                  >
                    <Button className="bg-blue-900 space-x-1">
                      <FaEdit /> <span className="hidden md:block">Edit</span>
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(event)}
                    className="bg-red-600 space-x-1"
                  >
                    <FaTrash /> <span className="hidden md:block">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="text-black bg-slate-200">
            <TableRow>
              <TableCell colSpan={3}>Total Events</TableCell>
              <TableCell className="text-right">
                {recentEvents?.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default ManageRecentEvents;
