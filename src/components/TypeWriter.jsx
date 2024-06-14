
import { TypewriterEffectSmooth } from "../components/TypeWriterEffect";
export function Typewriter() {
  const words = [
    {
      text: "Turning",
    },
    {
      text: "ideas",
    },
    {
      text: "into",
    },
    {
      text: "code.",
      className: "text-[#2d3dcc] dark:text-[#3368fa]"
    },
  ];
  return (
    <div className="w-auto">

      <TypewriterEffectSmooth words={words} />
    </div>
   
  );
}
