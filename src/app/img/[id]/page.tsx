import FullPageImageView from "~/components/full-image-page";
import { getImage } from "~/server/queries";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  
  if(isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return <FullPageImageView id={idAsNumber} />;
}