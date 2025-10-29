import React from "react";

interface TailwindButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

const TailwindButton: React.FC<TailwindButtonProps> = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
  ...props
}) => {
  return (
    <button
      className={`bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6 text-white inline-block ${otherClasses}`}
      onClick={handleClick}
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex items-center z-10 rounded-lg bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
        <span className={`flex items-center gap-2 ${otherClasses}`}>
          {position === "left" && (
            <>
              {icon}
              <span>{title}</span>
            </>
          )}
          {position === "right" && (
            <>
              <span>{title}</span>
              {icon ? (
                icon
              ) : (
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </>
          )}
        </span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default TailwindButton;
