/* Importing the Sanity client from the Sanity client library. */
import sanityClient from '@sanity/client';

/* Importing the imageUrlBuilder from the Sanity client library. */
import imageUrlBuilder from '@sanity/image-url';


/* Exporting the client and the urlFor function. */
export const client = sanityClient({
    projectId: '2vtsuzge',
    dataset: 'production',
    useCdn: true, 
    token: process.env.PUBLIC_SANITY_TOKEN,
    apiVersion: '2022-04-23'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)


