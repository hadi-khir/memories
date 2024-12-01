import { fetchPhotos } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

const ImageGrid = async () => {

    const photos = await fetchPhotos();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos && photos.map((photo) => (
                <Link key={photo.id} href={`/image/${photo.id}`}>
                    <div className="aspect-square border border-gray-300 rounded-lg overflow-hidden group relative">
                        <Image
                            src={`https://utfs.io/f/${photo.upload_key}`}
                            alt={photo.caption}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ImageGrid;