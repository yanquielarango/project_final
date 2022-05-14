import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: '2vtsuzge',
    dataset: 'production',
    useCdn: true, 
    token: process.env.PUBLIC_SANITY_TOKEN,
    apiVersion: '2022-04-23'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)


