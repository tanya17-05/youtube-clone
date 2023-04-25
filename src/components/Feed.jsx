import { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import { LeftNav, VideoCard } from "../components";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")

  }, [])
  
  return (
    <div className="flex h-[calc(100%-56px)]  bg-black">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5">
          {!loading &&
            searchResults &&
            searchResults?.map((item, i) => {
              if (item.type !== "video") return false;
              return <VideoCard key={i} video={item.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
