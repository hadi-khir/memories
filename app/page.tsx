import ImageGrid from "@/components/image-grid";
import Image from "next/image";

export default async function Home() {

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
      <ImageGrid />
    </div>
  );
}
