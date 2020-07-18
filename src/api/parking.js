
export async function fetchData(id) {
  const query = id ? `&refine.recordid=${id}` : '';

  const res = await fetch(
    `${process.env.REACT_APP_API}&q=&facet=description${query}`,
  );
  return res.json();
}
