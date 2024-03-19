import React from "react";

const Loading = () => {
  return (
    <div className="w-[min(93%,32rem)] m-auto pt-10 xs:pt-16 md:pt-24">
      <div className="bg-slate-300 h-10 animate-pulse rounded-3xl max-w-[70%] mb-3" />
      <div className="bg-slate-300 h-5 animate-pulse rounded-3xl max-w-[50%]" />
      <div className="grid gap-3 mt-10">
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className="bg-slate-300 h-20 animate-pulse rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
