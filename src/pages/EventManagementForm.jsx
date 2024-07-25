import React from 'react'
import ReactDOM from 'react-dom/client'
import { useForm } from '@tanstack/react-form'

// export default function EventManagementForm() {
//   const form = useForm({
//     defaultValues: {
//       fullName: '',
//     },
//     onSubmit: async ({ value }) => {
//       // Do something with form data
//       console.log(value)
//     },
//   })

//   return (
//     <div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             form.handleSubmit();
//           }}
//         >
//           <div>
//             <form.Field
//               name="fullName"
//               children={(field) => (
//                 <input
//                   name={field.name}
//                   value={field.state.value}
//                   onBlur={field.handleBlur}
//                   onChange={(e) => field.handleChange(e.target.value)}
//                 />
//               )}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//     </div>
//   )
// }

export default function EventManagementForm() {
  const form = useForm({
    defaultValues: {
      eventName: '',
      date: '',
      time: '',
      location: '',
      description: '',
    },
    onSubmit: async (values) => {
      // Here you would typically handle the form submission
      console.log(values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Event</h2>
        <form onSubmit={form.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
              Event Name
            </label>
            <form.Field
              name="eventName"
              children={(field) => (
                <input
                  {...field.props}
                  type="text"
                  id="eventName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter event name"
                />
              )}
            />
          </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <form.Field
                name="date"
                children={(field) => (
                  <input
                    {...field.props}
                    type="date"
                    id="date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <form.Field
              name="location"
              children={(field) => (
                <input
                  {...field.props}
                  type="text"
                  id="location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter event location"
                />
              )}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <form.Field
              name="description"
              children={(field) => (
                <textarea
                  {...field.props}
                  id="description"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter event description"
                />
              )}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Event
            </button>
          </div>
        </form>
    </div>
  );
};
