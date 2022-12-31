export const getServices = async () => {
  const response = await fetch('http://localhost:7070/api/services');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const getService = async (id) => {
  const response = await fetch(`http://localhost:7070/api/services/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}