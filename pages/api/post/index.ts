import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const origin = process.env.CMS_ORIGIN;
  const query = req.query;
  const category = query.category;
  const slug = query.slug;
  const cmsRes = await fetch(
    `${origin}/api/post${slug ? `/${slug}` : ""}${
      category ? `?category=${category}` : ""
    }`,
    {
      method: "GET",
    }
  );

  if (cmsRes.status !== 200) {
    return res.status(200).json([]);
  }

  const posts = await cmsRes.json();
  return res.status(200).json(posts);
};

export default handler;
