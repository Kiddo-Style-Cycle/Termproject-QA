import { createPortal } from "react-dom";
import ModalButton from "../components/ModalButton";

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  message,
  imageSrc,
  imageAlt = "Character",
  accentClass = "bg-[#FFECF4]",
  actions = [],
  closeOnBackdrop = true,
}) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg md:max-w-2xl min-h-[45vh] md:min-h-0">
        {/* Top band*/}
        <div className={`absolute inset-x-0 top-0 z-0 w-full h-32 md:h-60 ${accentClass}`} />

        {/* Body */}
        <div className=" relative px-8 md:px-10 pb-8 md:pb-10 mt-10 md:mt-10 flex flex-col items-center text-center z-10">
          {/* image */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-60 h-60 md:w-80 md:h-80 object-contain mb-2"
            />
          )}

          {/* title */}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] mb-3 winky-font">
              {title}
            </h2>
          )}
          
          {/* Subtitle */}
           {subtitle && (
            <p className="text-base sm:text-xl md:text-2xl text-[#616161] mb-4 winky-font">
              {subtitle}
            </p>
          )}


          {/* Bigger message*/}
          {message && (
            <p className="text-base sm:text-md md:text-lg text-[#616161] mb-6 max-w-sm sm:max-w-md winky-font">
              {message}
            </p>
          )}

          {/* Buttons*/}
          {actions.length > 0 && (
            <div className="flex flex-row gap-3">
              {actions.map((a, i) => (
                <ModalButton
                  key={i}
                  variant={a.variant}
                  onClick={a.onClick}
                  className={a.className}
                  type="button"
                >
                  {a.label}
                </ModalButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}