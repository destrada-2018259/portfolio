import { cn } from "../utils/cn";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-[#333333] hover:shadow-lg transition duration-300  p-2 bg-[#252525] border-[#111111]  border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        {icon}
        <div className="font-sans font-bold text-[#f1f1f1] text-2xl mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-sm text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
