import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a9tNkK5IuJOnHZ6EGTmeYrM7WscaVpHNQqCL6XGbEl03KIOU",
  "https://utfs.io/f/a9tNkK5IuJOnWwEubk14liMesw2j6yDodtqC3INRPku7az8K",
  "https://utfs.io/f/a9tNkK5IuJOnsskUapQSQ6Oh0q8dT9utzCeaAUwxEJRBLfnK"

];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))
      
        }
      </div>
    </main>
  );
}
