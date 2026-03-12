export async function load({ params }) {
    const res = await fetch('http://localhost:1337/api/learning-modules?populate=*');
    const json = await res.json();
    return json;
}