import { useState, useMemo } from "react";
import SmileyBlank from "../../assets/icons/SmileyBlank.svg?react";
import Smiley from "../../assets/icons/Smiley.svg?react";
import SmileyWink from "../../assets/icons/SmileyWink.svg?react";
import Heart from "../../assets/icons/Heart.svg?react";
import Confetti from "../../assets/icons/Confetti.svg?react";
import Mannequin from "../../assets/images/mannequin.png";

const TASKS = [
  "",
  "Wear all your clothes at least once this month",
  "Fix one broken or torn thing",
  "Make a new outfit from old stuff",
  "Look up one eco-friendly fashion brand",
  "Teach a friend or grown-up what you learned",
  "",
];

const STAGES = [
  { at: 0, label: "Start", Icon: SmileyBlank },
  { at: 25, label: "Nice", Icon: Smiley },
  { at: 50, label: "Half", Icon: SmileyWink },
  { at: 75, label: "Almost", Icon: Heart },
  { at: 100, label: "Done", Icon: Confetti },
];

export default function FashionChallenge() {
  const [checked, setChecked] = useState(() => TASKS.map(() => false));

  const isBlank = (t) => !t || !t.trim();
  const VISIBLE_INDICES = useMemo(
    () =>
      TASKS.map((t, i) => (!isBlank(t) ? i : null)).filter((i) => i !== null),
    []
  );

  const total = VISIBLE_INDICES.length;
  const completed = useMemo(
    () => VISIBLE_INDICES.reduce((sum, i) => sum + (checked[i] ? 1 : 0), 0),
    [checked]
  );

  const finePercent = (completed / total) * 100;

  // stage
  const stageIndex = useMemo(() => {
    if (finePercent === 100) return 4;
    if (finePercent >= 75) return 3;
    if (finePercent >= 50) return 2;
    if (finePercent >= 25) return 1;
    return 0;
  }, [finePercent]);

  // Snap bar/thumb to same stops as emojis
  const STAGE_STOPS = [0, 25, 50, 75, 100];
  const stagePercent = STAGE_STOPS[stageIndex];

  const msg =
    finePercent === 0
      ? "Great start! Every step helps the planet."
      : finePercent < 50
      ? "You’re on your way! Keep up the good work."
      : finePercent < 75
      ? "Halfway there! Keep going! "
      : finePercent < 100
      ? "Almost a Fashion Hero! One more to go!"
      : "You did it! You’re a true Fashion Hero!";

  const toggle = (i) =>
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });

  return (
    <section className="relative py-10 px-10">
      {/* Background strip */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#FAFAFA]" />
      </div>

      {/* Title */}
      <div className="text-center winky-font mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E]">
          Fashion Hero Challenge!
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-[#616161]">
          Try these fun missions and check them off as you go
        </p>
      </div>

      {/* Card */}
      <div className="relative mx-auto w-full max-w-xl">
        <div className="w-full max-w-xl">
          {/* Checklist area */}
          <div className="py-4 sm:py-6">
            <div className="rounded-[18px] bg-[#F7F4EF]">
              <ul className="divide-y divide-[#D4CABA]">
                {TASKS.map((t, i) => {
                  const blankRow = isBlank(t);

                  return (
                    <li key={i} className="py-2 sm:py-2.5 px-10">
                      {blankRow ? (
                        <div className="flex items-start gap-3">
                          <span
                            className="h-5 w-5 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-sm sm:text-base text-[#616161]">
                            &nbsp;
                          </span>
                        </div>
                      ) : (
                        // Checkbox and label
                        <label className="flex items-center gap-3 cursor-pointer winky-font md:pl-10">
                          <span className="relative h-5 w-5 shrink-0">
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
                          <span className="text-sm sm:text-base text-[#616161]">
                            {t}
                          </span>
                        </label>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Emoji stage row */}
              <div className="w-full">
                <div className="mx-auto w-full max-w-[560px] px-10">
                  <div className="flex w-full items-center justify-between text-2xl sm:text-3xl">
                    {STAGES.map((s, idx) => {
                      const active = idx === stageIndex;
                      const Icon = s.Icon;
                      return (
                        <span
                          key={s.at}
                          className={`transition ${
                            active ? "opacity-100 scale-110" : "opacity-40"
                          }`}
                          aria-label={s.label}
                        >
                          <Icon
                            className="h-7 w-7"
                            style={{ color: active ? "#B36F00" : "#616161" }}
                            aria-hidden="true"
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Progress bar*/}
              <div className="mt-4 mx-auto w-full md:max-w-[530px] max-w-[390px] px-10">
                <div
                  className="relative h-2 rounded-full bg-[#EADFD0]"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(stagePercent)}
                >
                  {/* Fill snaps to emoji stops */}
                  <div
                    className="absolute left-0 top-0 h-2 rounded-full bg-[#C68B00]"
                    style={{ width: `${stagePercent}%` }}
                  />
                  {/* Thumb snaps to emoji stops */}
                  <div
                    className="absolute -top-1 h-4 w-4 rounded-full bg-[#C68B00]"
                    style={{ left: `calc(${stagePercent}% - 8px)` }}
                  />
                </div>

                {/* message + counter */}
                <div className="mt-3 flex items-center justify-between md:text-lg text-sm winky-font pb-5">
                  <span className="text-[#B36F00]">{msg}</span>
                  <span className="text-[#616161]">
                    <span className="text-[#B36F00] font-semibold">
                      {completed}
                    </span>{" "}
                    / {total}
                  </span>
                </div>
              </div>
            </div>
              <img
                src={Mannequin}
                alt="Mannequin"
                className="mt-6 mx-auto block h-auto w-18 md:w-20 lg:mt-0 lg:mx-0 lg:absolute md:top-47 lg:left-full lg:ml-8"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
