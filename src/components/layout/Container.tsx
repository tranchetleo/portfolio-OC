type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "row" | "col" | "grid2" | "grid3" | "grid4" | "grid5";
};

export function Container({ children, className = "", type }: Props) {
  return (
    <div
      className={`${className} mx-auto my-4 gap-4 
        ${type === "grid2" ? "grid grid-cols-1 lg:grid-cols-2" : ""}
        ${type === "grid3" ? "grid grid-cols-1 lg:grid-cols-3" : ""}
        ${type === "grid4" ? "grid grid-cols-1 lg:grid-cols-4" : ""}
        ${type === "grid5" ? "grid grid-cols-1 lg:grid-cols-5" : ""}
        ${type === "row" ? "flex flex-col md:flex-row justify-between" : ""}
        ${type === "col" ? "flex flex-col" : ""}
        `}
    >
      {children}
    </div>
  );
}
