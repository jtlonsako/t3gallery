import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/a9tNkK5IuJOnHZ6EGTmeYrM7WscaVpHNQqCL6XGbEl03KIOU",
  "https://utfs.io/f/a9tNkK5IuJOnWwEubk14liMesw2j6yDodtqC3INRPku7az8K",
  "https://utfs.io/f/a9tNkK5IuJOnsskUapQSQ6Oh0q8dT9utzCeaAUwxEJRBLfnK"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy:(model, { desc }) => desc(model.id)
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + '-' + index} className="w-48 p-4 flex flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))
      
        }
      </div>
    </main>
  );
}
