import { createClient } from 'contentful';
import { contentfulConfig } from '../config/contentful';

// Client resmi Contentful (Content Delivery API). Tidak ada fetch manual.
export const contentfulClient = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.accessToken,
  environment: contentfulConfig.environment,
});

// Mengambil seluruh entri dengan content type "parfumes".
export async function fetchParfumeEntries() {
  const response = await contentfulClient.getEntries({
    content_type: contentfulConfig.contentType,
    limit: 100,
  });
  return response.items ?? [];
}
