import React from 'react'
import { useEvent } from '../services/useEvent';
import Header from '../ui/Header';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDeleteEvent } from '../services/useDeleteEvent';
import { HiTrash } from 'react-icons/hi2';

const EventsTable = () => {

  const {events, isCreating} = useEvent();
  console.log(events);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
        <UpcomingEventsTable events={events} isCreating={isCreating}/>
      </div>
    </>
  );
};


function UpcomingEventsTable({ events, isCreating }) {
  const navigate = useNavigate();

  const {isDeleting, deleteEvent} = useDeleteEvent();

  if (isDeleting || isCreating) return <Spinner />;

  return (
    <div className="w-full">
      <div className=" overflow-x-auto">
        <table className="min-w-full bg-white mb-5">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events?.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{event.event_name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.start_date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.duration}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    <button onClick={()=>deleteEvent(event.id)} disabled={isDeleting || isCreating}>
                      <HiTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button size="small" 
          onClick={()=>navigate("/form")}
          disabled={isDeleting || isCreating}
          >
            Add Event
        </Button>
      </div>
    </div>
  );
};


export default EventsTable;
