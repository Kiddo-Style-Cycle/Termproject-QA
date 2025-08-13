import { useEffect, useRef, useState } from "react";

export default function Picture() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const openPicker = () => inputRef.current?.click();

  const onSelect = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview((old) => {
      if (old) URL.revokeObjectURL(old);
      return URL.createObjectURL(f);
    });
  };

  const onSubmit = () => {
    // Submit
    setTimeout(() => {
      alert("Submit successful! You are a Fashion Hero!");
      setFile(null);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
      if (inputRef.current) inputRef.current.value = "";
    }, 200);
  };

  useEffect(
    () => () => {
      if (preview) URL.revokeObjectURL(preview);
    },
    [preview]
  );

  return (
    <section className="relative py-10 px-10">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#FAFAFA]" />
      </div>

      {/* Title */}
      <div className="text-center winky-font mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E]">
          Show Off Your Style!
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-[#616161]">
          Did you make something cool or complete a challenge?
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onSelect}
        className="hidden"
      />

      {/* Upload card */}
      <div className="mx-auto w-full max-w-[644px]">
        <button
          type="button"
          onClick={openPicker}
          className="group w-full h-[280px] rounded-[18px] border border-[#B36F00] bg-[#F8F7F2] flex flex-col items-center justify-center gap-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B36F00]/40"
        >
          {!preview ? (
            <>
              {/*Camera Icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-20 w-20 text-[#B36F00]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
                <circle cx="12" cy="13" r="3.5" />
              </svg>

              <span className="text-center text-xl text-[#B36F00] winky-font px-4 py-1">
                Upload your photos and inspire others
                <br />
                to be Fashion Heroes too!
              </span>
            </>
          ) : (
            <>
              <img
                src={preview}
                alt="Selected preview"
                className="h-32 w-32 rounded-md object-cover border border-[#D4CABA] shadow-sm"
              />
              <span className="text-sm text-[#B36F00]">{file?.name}</span>
              <span className="text-lg text-[#B36F00] winky-font">
                Click to change photo
              </span>
            </>
          )}
        </button>
        {/* Submit button  */}
        {file && (
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={onSubmit}
              className="bg-[#B36F00] text-white hover:border-2 hover:border-[#B36F00] hover:text-[#B36F00] hover:bg-[#F8F7F2] hover:scale-105 transition-transform duration-300 ease-in-out font-normal winky-font rounded-[20px] text-base px-4 py-2 w-[160px] h-[48px] sm:text-lg sm:px-5 sm:py-2.5 sm:w-[180px] sm:h-[56px] md:px-6 md:py-3 md:w-[200px] md:h-[60px]"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
