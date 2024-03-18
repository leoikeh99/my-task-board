"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="w-[min(93%,32rem)] m-auto pt-10 xs:pt-16 md:pt-24">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
