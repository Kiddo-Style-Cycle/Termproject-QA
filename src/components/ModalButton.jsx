export default function ModalButton({ variant = "primary", className = "", ...props }) {
  const base =
    "transition-transform duration-300 ease-in-out winky-font rounded-[20px] " +
    "text-base px-4 py-2 w-[160px] h-[48px] sm:text-lg sm:px-5 sm:py-2.5 sm:w-[180px] sm:h-[56px] " +
    "md:px-6 md:py-3 md:w-[200px] md:h-[60px]";
  const outline =
    "border-2 border-[#B30047] text-[#B30047] hover:text-white hover:bg-[#B30047] hover:scale-105";
  const primary =
    "bg-[#B30047] text-white border-2 border-[#B30047] hover:bg-white hover:text-[#B30047] hover:border-[#B30047] hover:scale-105";
  const cls = `${variant === "outline" ? outline : primary} ${base} ${className}`;

  return <button className={cls} {...props} />;
}
