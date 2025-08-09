import { useState, useEffect } from "react";
import CustomersCRUDList from "./components/CustomersCRUDList";
import CustomersCRUDForm from "./components/CustomersCRUDForm";

export default function CustomersCRUDApp() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const fetchCustomers = async () => {
    const res = await fetch("http://localhost:8083/api/customers2");
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSave = async (customer) => {
    console.log("Updating customer:", customer);  // <-- Added this line

    if (customer.id) {
      await fetch(`http://localhost:8083/api/customers2/${customer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
    } else {
      await fetch("http://localhost:8083/api/customers2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
    }
    setEditingCustomer(null);
    fetchCustomers();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      await fetch(`http://localhost:8083/api/customers2/${id}`, { method: "DELETE" });
      fetchCustomers();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Subscription Management (CRUD)</h1>
      <CustomersCRUDForm
        onSave={handleSave}
        editingCustomer={editingCustomer}
        setEditingCustomer={setEditingCustomer}
      />
      <CustomersCRUDList
        customers={customers}
        onEdit={setEditingCustomer}
        onDelete={handleDelete}
      />
    </div>
  );
}
