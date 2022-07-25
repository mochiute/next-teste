// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  await res.revalidate("/");

  return res.status(200).json({ name: "John Doe" });
}
