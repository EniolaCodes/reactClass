import React, { useState } from "react";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="p-12">
      <h2>Saheed AbdulRazaq</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million
      </Panel>
      <Panel
        title="Physics"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        What is isotopes
      </Panel>
      <Panel
        title="bio"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        What is isotopes
      </Panel>
      <Panel
        title="chemistry"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      >
        gbasgbos
      </Panel>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="border-2 border-red-600 p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      {isActive ? (
        <p className="text-[14px] font-semibold">{children}</p>
      ) : (
        <button
          className="border px-4 py-6 hover:text-amber-400"
          onClick={onShow}
        >
          Show
        </button>
      )}
    </section>
  );
}
