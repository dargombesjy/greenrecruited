import { PUBLIC_STRAPI_URL } from '$env/static/public';

export async function load({ params }) {
    const res = await fetch(`${PUBLIC_STRAPI_URL}/api/resources-videos?${params.slug}`);
    const json = await res.json();
    return json;
}