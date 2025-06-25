import React from "react";

const Dashboard = ({ customerList = [], message = "", onDelete }) => {
  // confirm delete function
  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      onDelete && onDelete(id);
    }
  };

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <img src="/img/histogram.svg" alt="Your Company" className="size-8" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  {/* Other nav links commented out */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {message && (
            <div className="bg-green-200 border border-green-400 border-solid mb-5 p-2 rounded-md text-green-900">
              <p>{message}</p>
            </div>
          )}
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <a
            href="/create"
            className="bg-blue-600 font-medium px-3 py-2 rounded-md text-sm text-white inline-block mb-5 hover:bg-blue-700"
          >
            Add New
          </a>

          <table className="table-auto w-full">
            <thead className="bg-gray-800 text-white uppercase">
              <tr>
                <th className="px-6 py-3 text-center">ID</th>
                <th className="px-6 py-3 text-center">Last Name</th>
                <th className="px-6 py-3 text-center">First Name</th>
                <th className="px-6 py-3 text-center">Email</th>
                <th className="px-6 py-3 text-center">Phone</th>
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              {customerList.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-4">
                    No customers found.
                  </td>
                </tr>
              )}

              {customerList.map((customer) => (
                <tr key={customer.id} className="bg-white border-b">
                  <td className="px-6 py-5 text-center">{customer.id}</td>
                  <td className="px-6 py-5 text-center">{customer.lastName}</td>
                  <td className="px-6 py-5 text-center">{customer.firstName}</td>
                  <td className="px-6 py-5 text-center">{customer.email}</td>
                  <td className="px-6 py-5 text-center">{customer.phone}</td>
                  <td className="px-6 py-5 text-center">
                    {/* SHOW BUTTON */}
                    <a
                      href={`/customer/${customer.id}`}
                      className="bg-green-700 font-medium hover:bg-green-900 px-3 py-2 rounded-md text-sm text-white mr-1"
                    >
                      Show
                    </a>

                    {/* EDIT BUTTON */}
                    <a
                      href={`/customer/${customer.id}/edit`}
                      className="bg-blue-600 font-medium hover:bg-blue-700 px-3 py-2 rounded-md text-sm text-white mr-1"
                    >
                      Edit
                    </a>

                    {/* DELETE BUTTON */}
                    <button
                      onClick={() => confirmDelete(customer.id)}
                      className="bg-red-600 font-medium hover:bg-red-700 px-3 py-2 rounded-md text-sm text-white mr-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
