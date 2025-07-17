import React, { useState, useEffect } from "react";

const CustomerForm = ({ customer = {}, onSubmit }) => {
  // Local state for form fields, initialized from `customer` prop if editing
  const [firstName, setFirstName] = useState(customer.firstName || "");
  const [lastName, setLastName] = useState(customer.lastName || "");
  const [email, setEmail] = useState(customer.email || "");
  const [phone, setPhone] = useState(customer.phone || "");

  // Simulate validation errors for demonstration (replace with real validation)
  const [errors, setErrors] = useState({});

  // Confirm update if editing an existing customer
  const handleSubmit = (e) => {
    e.preventDefault();
    if (customer.id) {
      if (!window.confirm("Are you sure you want to update this customer?")) {
        return;
      }
    }

    // Simple validation example
    let validationErrors = {};
    if (!firstName) validationErrors.firstName = "First name is required";
    if (!lastName) validationErrors.lastName = "Last name is required";
    if (!email) validationErrors.email = "Email is required";
    if (!phone) validationErrors.phone = "Phone is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Prepare data to submit
      const formData = { id: customer.id, firstName, lastName, email, phone };
      onSubmit(formData);
    }
  };

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
                <img src="/img/pen.svg" alt="Pen icon" />
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

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="isolate bg-white px-6 py-10 sm:py-12 lg:px-8 rounded-lg shadow">
            <div className="mx-auto max-w-2xl text-center mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-gray-600">
                {customer.id == null
                  ? "Add New Customer"
                  : `Edit ${customer.firstName} ${customer.lastName}`}
              </h1>
            </div>

            <form id="customerForm" onSubmit={handleSubmit}>
              <input type="hidden" value={customer.id || ""} />

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-600 focus:outline-indigo-600"
                    />
                    {errors.firstName && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-600 focus:outline-indigo-600"
                    />
                    {errors.lastName && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-600 focus:outline-indigo-600"
                    />
                    {errors.email && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-600 focus:outline-indigo-600"
                    />
                    {errors.phone && (
                      <div className="text-red-600 text-sm mt-1">{errors.phone}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerForm;
