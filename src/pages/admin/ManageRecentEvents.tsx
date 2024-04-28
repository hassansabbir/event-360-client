import { TRecentEvent, getRecentEvents } from "@/components/RecentEvent.api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const ManageRecentEvents = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recent-events"],
    queryFn: getRecentEvents,
  });

  const recentEvents = data?.data?.data;

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (isError) {
    return <p className="text-white">Something went wrong</p>;
  }
  console.log(isLoading, data);

  return (
    <div>
      <h1 className="text-6xl font-bold text-center my-10">Recent Events</h1>
      <p className="text-xl mx-auto text-center w-[100ch]">
        Welcome to the 'Recent Events' page of the admin dashboard! Here, you
        can effortlessly manage all the latest events showcased on your website.
        From adding exciting new events to updating existing ones and even
        removing outdated listings, this is your central hub for keeping your
        audience engaged and informed. Let's make every event memorable
        together!
      </p>
      <div className="text-center my-10">
        <Button className="text-black h-12 rounded-xl text-lg font-bold bg-gradient-to-r from-gradientFrom to-gradientTo">
          <MdAdd className="w-6 h-6 me-1" /> Add an Event
        </Button>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
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
                  <img src={event?.imgUrl} alt="" />
                </TableCell>
                <TableCell className="">{event?.eventName}</TableCell>
                <TableCell className="">{event?.arrangedBy}</TableCell>
                <TableCell className="text-right  space-x-3">
                  <Button className="bg-blue-900 space-x-1">
                    <FaEdit /> <span className="hidden md:block">Edit</span>
                  </Button>
                  <Button className="bg-red-600 space-x-1">
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
