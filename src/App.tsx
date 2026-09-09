import { useState } from "react";
export default function App(){
  const [links,setLinks]=useState([{label:"GitHub",href:"https://github.com/knownasrazi"},{label:"Twitter",href:"https://x.com/knownasrazi"}]);
  const [label,setLabel]=useState(""); const [href,setHref]=useState("");
  function add(){ if(!label||!href) return; setLinks([...links,{label,href}]); setLabel(""); setHref(""); }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a] flex justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-[#ebe7e0]" />
          <h1 className="mt-3 text-xl font-light">Razi</h1>
          <p className="text-sm text-[#9a9590]">Developer · vibe coder</p>
        </div>
        <div className="mt-6 space-y-2">
          {links.map(l=>(
            <a key={l.href} href={l.href} className="block rounded-2xl border border-[#ebe7e0] bg-white p-3 text-center text-sm hover:bg-[#fdfcfa]">{l.label}</a>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          <input value={label} onChange={e=>setLabel(e.target.value)} placeholder="Label" className="flex-1 rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
          <input value={href} onChange={e=>setHref(e.target.value)} placeholder="https://" className="flex-1 rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
          <button onClick={add} className="rounded-xl bg-[#1a1a1a] px-3 text-white">Add</button>
        </div>
      </div>
    </main>
  );
}
