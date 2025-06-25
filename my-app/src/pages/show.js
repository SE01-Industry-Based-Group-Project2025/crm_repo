import React from "react";

const CustomerDetails = ({ customer = {} }) => {
  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  src="/img/genetic-data.svg"
                  className="size-8"
                  alt="Your Company"
                />
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
                  {/* Uncomment or add more links if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {customer.firstName} {customer.lastName}
          </h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-300 bg-white">
            <table className="table-auto w-full text-lg">
              <tbody>
                <tr className="bg-gray-100">
                  <th className="uppercase text-left px-8 py-5 w-1/4 text-white bg-gray-800 rounded-tl-2xl">
                    ID
                  </th>
                  <td className="px-8 py-5 text-gray-800">{customer.id}</td>
                </tr>
                <tr>
                  <th className="uppercase text-left px-8 py-5 bg-gray-800 text-white">
                    First Name
                  </th>
                  <td className="px-8 py-5 text-gray-800">{customer.firstName}</td>
                </tr>
                <tr className="bg-gray-100">
                  <th className="uppercase text-left px-8 py-5 bg-gray-800 text-white">
                    Last Name
                  </th>
                  <td className="px-8 py-5 text-gray-800">{customer.lastName}</td>
                </tr>
                <tr>
                  <th className="uppercase text-left px-8 py-5 bg-gray-800 text-white">
                    Email
                  </th>
                  <td className="px-8 py-5 text-gray-800">{customer.email}</td>
                </tr>
                <tr className="bg-gray-100">
                  <th className="uppercase text-left px-8 py-5 bg-gray-800 text-white rounded-bl-2xl">
                    Phone Number
                  </th>
                  <td className="px-8 py-5 text-gray-800 rounded-br-2xl">
                    {customer.phone}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDetails;
