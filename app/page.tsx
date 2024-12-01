import { supabase } from "@/utils/client";
import Image from "next/image";

export default async function Home() {

  const { data, error } = await supabase.from('photos').select();
  console.log(data);

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      {/* Avatar */}
      <div className="mt-16 rounded-full w-32 h-32 overflow-hidden">
        <Image
          src="/profile.jpeg"
          alt="Profile Picture"
          width={256}
          height={256}
          className="object-cover"
        />
      </div>

      {/* Title Section */}
      <h1 className="mt-6 text-2xl font-bold">Hadi's Memories</h1>
      <p className="mt-4 text-center w-1/2">
        A curated collection of my favourite photos. Some are here because I
        thought the picture itself was worth sharing, and others because the
        memory behind them is special. Either way, thanks for stopping by!
      </p>

      {/* Divider */}
      <div className="my-8 w-4/5 h-[1px] bg-black dark:bg-white" />

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-4/5">
        {data?.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square border border-gray-300 rounded-lg flex items-center justify-center"
          >
            <Image
              src={`https://utfs.io/f/${photo.upload_key}`}
              alt={photo.caption}
              width={0}
              height={0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
