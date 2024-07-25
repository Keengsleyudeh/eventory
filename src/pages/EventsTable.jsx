import React from 'react'

const EventsTable = () => {
  const events = [
    {
      id: 1,
      name: 'Summer Festival',
      date: '2024-08-15',
      createdAt: '2024-05-01',
      duration: '3 days',
      location: 'Central Park'
    },
    {
      id: 2,
      name: 'Tech Conference',
      date: '2024-09-22',
      createdAt: '2024-06-10',
      duration: '2 days',
      location: 'Convention Center'
    },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <UpcomingEventsTable events={events} />
    </div>
  );
};


function UpcomingEventsTable({ events }) {
  return (
    <div className="w-full">
      {/* Mobile view */}
      <div className="block md:hidden">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg mb-4 p-4">
            <h3 className="font-bold text-lg mb-2">{event.name}</h3>
            <p className="text-sm text-gray-600"><span className="font-semibold">Date:</span> {event.date}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Created:</span> {event.createdAt}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Duration:</span> {event.duration}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Location:</span> {event.location}</p>
          </div>
        ))}
      </div>

      {/* Table view for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{event.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.createdAt}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.duration}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.location}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default EventsTable;

// export default function EventsTable() {
//   return <div>Yo</div>
// }