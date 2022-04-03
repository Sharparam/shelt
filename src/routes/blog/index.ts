import type { RequestHandler } from '@sveltejs/kit';
import { compareDesc, parseISO } from 'date-fns';
import nodePath from 'path';

export const get: RequestHandler = async () => {
  const allPostFiles = import.meta.glob('./**/*.{svx,md}');
  const iterPostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterPostFiles
      .map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const parsedPath = nodePath.parse(path);
        const slug = parsedPath.name;
        const postPath = `/blog/${parsedPath.dir.slice(2)}/${parsedPath.name}`;
        const date = parseISO(metadata.date);

        return {
          date,
          slug,
          meta: metadata,
          path: postPath
        };
      })
      .filter((d) => d !== undefined)
  );

  const sorted = allPosts.sort((a, b) => {
    return compareDesc(a.date, b.date);
  });

  return {
    body: { posts: sorted }
  };
};
