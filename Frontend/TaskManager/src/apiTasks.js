export async function fetchTasksById(id) {
  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: "GET",
  });

  if (!res.ok) return null;

  const data = await res.json();
  if (!data) return null;
  return data;
}
export async function fetchTasks() {
  const res = await fetch(`http://localhost:8000/tasks`, {
    method: "GET",
  });

  if (!res.ok) return null;

  const data = await res.json();
  if (!data) return null;
  return data;
}

export async function createTask(task) {
  console.log(task)
  const res = await fetch(`http://localhost:8000/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) return {};
  const data = await res.json();
  if (!data) return {};
  return data;
}

export async function updateTask(id,task) {
  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  });
  console.log(task)
  if (!res.ok) return null;
  const data = await res.json();

  if (!data) return null;
  return data;
}

export async function deleteTask(id) {
  print(id)
  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    return { message: "Failed to delete.." };
  }
  const data = await res.json();

  return data;
}
