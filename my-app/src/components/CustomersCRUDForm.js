import { useState, useEffect } from "react";

export default function CustomersCRUDForm({ onSave, editingCustomer, setEditingCustomer }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [role, setRole] = useState("");  // <-- Added state for role
  const [message, setMessage] = useState("");  // <-- For success message

  useEffect(() => {
    if (editingCustomer) {
      setName(editingCustomer.name);
      setEmail(editingCustomer.email);
      setSubscriptionType(editingCustomer.subscriptionType);
      setRole(editingCustomer.role || "");  // <-- Set role when editing
    } else {
      setName("");
      setEmail("");
      setSubscriptionType("");
      setRole("");  // <-- Reset role
    }
  }, [editingCustomer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave({
      id: editingCustomer?.id,
      name,
      email,
      subscriptionType,
      role,   // <-- Include role on save
    });
    setEditingCustomer(null);
    setName("");
    setEmail("");
    setSubscriptionType("");
    setRole("");  // <-- Clear role
    setMessage("Customer saved successfully!");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">
        {editingCustomer ? "Edit Customer" : "Add Customer"}
      </h2>
      {message && (
        <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full border rounded px-3 py-2"
          type="email"
          placeholder="Customer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Role dropdown above subscription */}
        <select
          className="w-full border rounded px-3 py-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="teacher">Teacher</option>
          <option value="businessman">Businessman</option>
        </select>

        <select
          className="w-full border rounded px-3 py-2"
          value={subscriptionType}
          onChange={(e) => setSubscriptionType(e.target.value)}
          required
        >
          <option value="" disabled>Select Subscription</option>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="Business">Business</option>
        </select>

        <div className="flex gap-2">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            {editingCustomer ? "Update" : "Add"}
          </button>
          {editingCustomer && (
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              type="button"
              onClick={() => setEditingCustomer(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
