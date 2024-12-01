import { fetchPhotoById } from "@/app/lib/data";
import { Tables } from "@/database.types";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


type Params = Promise<{ id: number }>;
const Page = async ({ params }: { params: Params }) => {

    const { id } = await params;
    const currentImage: Tables<'photos'> | null = await fetchPhotoById(id);

    if (!currentImage) {
        return (
            <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
                <h1 className="text-2xl font-bold text-red-500">Image not found.</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center bg-gray-100 py-10">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Photo</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Image Display Section */}
            <div className="w-full mt-8 max-w-2xl bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center mb-8">
                <Image
                    src={`https://utfs.io/f/${currentImage.upload_key}`}
                    alt={currentImage.caption || "Image"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>

            {/* Image Metadata Section */}
            <div className="w-full max-w-2xl p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                {/* Album Title */}
                <h1 className="text-2xl font-bold underline mb-8">
                    {currentImage.title || "Untitled Album"}
                </h1>
                <p className="text-xl mt-8">{currentImage.caption}</p>
            </div>
        </div>
    );
};

export default Page;
