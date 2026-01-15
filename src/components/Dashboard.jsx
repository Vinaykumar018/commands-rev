import React, { useEffect, useState } from "react";
import employees from "../data/dashboard";

const Dashboard = () => {
  const [employee, setEmployee] = useState(employees);
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const id = setTimeout(() => {
      if (!search.trim()) {
        setEmployee(employees);
        return;
      }

      const filtered = employees.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      setEmployee(filtered);
    }, 500); // debounce delay (corporate-friendly)

    return () => clearTimeout(id);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={handleSearch}
      />

      {employee.length > 0 ? (
        <ul>
          {employee.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>No Results Found</div>
      )}
    </div>
  );
};

export default Dashboard;
