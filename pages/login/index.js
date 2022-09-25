import React from "react";
import Login from "src/components/Auth/Login";
import useWindowSize from "src/share/hooks/useWindowSize";

function Index() {
  const size = useWindowSize();
  console.log("size", size);
  return (
    <section
      className={`p-0 bg-[#FFFFFF] h-full w-full text-right overflow-hidden relative flex items-start justify-start`}
    >
      <Login />
    </section>
  );
}

export default Index;
