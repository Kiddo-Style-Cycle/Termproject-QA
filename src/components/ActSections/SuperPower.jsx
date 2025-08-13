import { useState, Fragment } from "react";
import Shirt from "../../assets/images/shirt.png";

const TASKS = [
  "",
  "Do I really need it? Or is it just super sparkly?",
  "Will I wear it a lot?",
  "What is it made of?",
  "Who made it?",
  "Can I find it second-hand?",
  "",
];

const SUBTASKS = [
  "",
  "",
  "Try the 30-times test!",
  "Look for cotton or recycled stuff!",
  "Brands that treat people right are best.",
  "Thrift shops = treasure hunts!",
  "",
];

export default function FashionChallenge() {
  const [checked, setChecked] = useState(() => TASKS.map(() => false));

  const isBlank = (t) => !t || !t.trim();

  const toggle = (i) =>
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });

  return (
    <section className="relative py-10 px-10">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#FFE6B3]" />
      </div>

      {/* Title */}
      <div className="text-center winky-font mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E]">
          Smart Shopping Superpowers
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-[#616161]">
          Ask these questions before you buy something new
        </p>
      </div>

      {/* Card */}
      <div className="relative mx-auto w-full max-w-xl">
        <div className="py-4 sm:py-6">
          <div className="rounded-[18px] bg-[#FAFAFA]">
            <ul className="divide-y divide-[#D4CABA]">
              {TASKS.map((t, i) => {
                const blank = isBlank(t);
                const subtask = SUBTASKS[i] || "";

                if (blank) {
                  return (
                    <li key={`blank-${i}`} className="py-2 sm:py-2.5 px-10">
                      <div className="flex items-start gap-3">
                        <span className="h-5 w-5 shrink-0" aria-hidden="true" />
                        <span className="text-sm sm:text-base text-[#616161]">
                          &nbsp;
                        </span>
                      </div>
                    </li>
                  );
                }

                return (
                  <Fragment key={`task-${i}`}>
                    {/* Task row */}
                    <li className="py-2 sm:py-2.5 px-10">
                      <label className="flex items-center gap-3 cursor-pointer winky-font md:pl-10">
                        <span className="relative h-5 w-5 shrink-0 text-[]">
                          <input
                            type="checkbox"
                            checked={checked[i]}
                            onChange={() => toggle(i)}
                            className="peer appearance-none h-5 w-5 rounded-[4px] border border-[#D4CABA] bg-[#F7F4EF] checked:bg-[#B36F00] checked:border-[#B36F00] transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#B36F00]/40"
                            aria-label={t}
                          />
                          <svg
                            viewBox="0 0 24 24"
                            className="pointer-events-none absolute top-1/2 left-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 block"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12.5l3 3 8-8" />
                          </svg>
                        </span>
                        <span className="text-sm sm:text-base text-[#B36F00]">
                          {t}
                        </span>
                      </label>
                    </li>

                    {/* Subtask row */}
                    {subtask && (
                      <li className="py-2 sm:py-2.5 px-10">
                        <div className="flex items-center gap-3 md:pl-10">
                          <span
                            className="h-5 w-5 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="md:text-sm text-xs text-[#616161]">
                            {subtask}
                          </span>
                        </div>
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          src={Shirt}
          alt=""
          aria-hidden="true"
          className="block mx-auto mt-15 h-auto w-30 md:w-46 absolute top-2/3 left-full md:-translate-y-12 md:-ml-18 z-10 -translate-y-4 -ml-30 "
        />
      </div>
    </section>
  );
}
