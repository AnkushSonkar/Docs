import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      id: 1,
      icon: "icon",
      desc: "this is background color of the card that will be displayed",
      size: ".9mb",
      downloadingIcon: "@",
      downloadingText: "Download Now",
    },
    {
      id: 2,
      icon: "icon",
      desc: "this is background color of the card that will be displayed",
      size: ".8mb",
      downloadingIcon: "#",
      downloadingText: "Upload",
    },
    {
      id: 3,
      icon: "icon",
      desc: "this is background color of the card that will be displayed",
      size: ".7mb",
      downloadingIcon: "$",
      downloadingText: "Download Now",
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="absolute top-0 left-0 h-screen w-full overflow-hidden text-zinc-100 flex gap-6 flex-wrap "
      >
        {data.map((data) => (
          <Cards key={data.id} ref={ref} data={data} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
