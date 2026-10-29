import React from "react";
import type { CSSProperties } from "react";
import type { ThemeName } from "./themes";

/**
 * Pure-CSS animated backgrounds. No client JS, no hydration issues:
 * particles are generated from a seeded RNG so server/client output match.
 */

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const css = `
.fx{position:fixed;inset:0;overflow:hidden;pointer-events:none;user-select:none;z-index:0}

/* ---------- icon animations ---------- */
.fx-bob{display:block;animation:fx-bob 3.5s ease-in-out infinite}
@keyframes fx-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.fx-flicker{display:block;animation:fx-flicker 3s linear infinite}
@keyframes fx-flicker{
  0%,100%{filter:drop-shadow(0 0 14px rgba(249,115,22,.8))}
  45%{filter:drop-shadow(0 0 24px rgba(251,146,60,1))}
  50%{filter:drop-shadow(0 0 8px rgba(249,115,22,.45))}
  55%{filter:drop-shadow(0 0 22px rgba(251,146,60,.95))}
}

/* ---------- snow ---------- */
.fx-flake{position:absolute;top:0;animation:fx-fall linear infinite;will-change:transform}
.fx-flake i{display:block;border-radius:9999px;background:#fff;box-shadow:0 0 6px rgba(255,255,255,.85);animation:fx-sway ease-in-out infinite alternate}
@keyframes fx-fall{from{transform:translate3d(0,-6vh,0)}to{transform:translate3d(var(--drift),106vh,0)}}
@keyframes fx-sway{from{transform:translateX(-14px)}to{transform:translateX(14px)}}

/* ---------- aurora (winter) ---------- */
.fx-aurora{position:absolute;top:-8%;left:-20%;width:140%;height:48%;filter:blur(42px);
  background:linear-gradient(100deg,rgba(52,211,153,0),rgba(52,211,153,.4),rgba(56,189,248,.4),rgba(168,85,247,.3),rgba(168,85,247,0));
  animation:fx-aurora 12s ease-in-out infinite alternate}
@keyframes fx-aurora{from{transform:translateX(-8%) skewX(-8deg);opacity:.55}to{transform:translateX(8%) skewX(8deg);opacity:1}}

/* ---------- stars (christmas) ---------- */
.fx-star{position:absolute;border-radius:9999px;background:#fff7d6;animation:fx-twinkle ease-in-out infinite}
@keyframes fx-twinkle{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.7)}}

/* ---------- christmas lights ---------- */
.fx-wire{position:absolute;top:4px;left:0;right:0;height:2px;background:rgba(0,0,0,.55)}
.fx-lights{position:absolute;top:0;left:0;right:0;display:flex;justify-content:space-between;padding:0 8px}
.fx-bulb{width:10px;height:15px;margin-top:4px;border-radius:50% 50% 50% 50%/55% 55% 45% 45%;
  background:var(--c);box-shadow:0 0 14px 4px var(--c);animation:fx-twinkle 2s ease-in-out infinite}
.fx-bulb:nth-child(even){margin-top:9px}

/* ---------- halloween ---------- */
.fx-moon{position:absolute;top:5%;right:7%;width:64px;height:64px;border-radius:9999px;
  background:radial-gradient(circle at 35% 35%,#fff7d6,#fde68a 60%,#f5c76a);
  box-shadow:0 0 40px 12px rgba(253,230,138,.3);animation:fx-moon 6s ease-in-out infinite alternate}
@media (min-width:640px){.fx-moon{width:96px;height:96px}}
@keyframes fx-moon{from{box-shadow:0 0 30px 8px rgba(253,230,138,.2)}to{box-shadow:0 0 60px 20px rgba(253,230,138,.45)}}

.fx-bat{position:absolute;left:0;animation:fx-bat linear infinite;will-change:transform}
.fx-bat span{display:block;animation:fx-flap .35s ease-in-out infinite alternate}
@keyframes fx-bat{
  0%{transform:translate3d(-15vw,0,0)}
  25%{transform:translate3d(20vw,-34px,0)}
  50%{transform:translate3d(50vw,22px,0)}
  75%{transform:translate3d(80vw,-28px,0)}
  100%{transform:translate3d(115vw,0,0)}
}
@keyframes fx-flap{from{transform:scaleY(1)}to{transform:scaleY(.5)}}

.fx-ghost{position:absolute;animation:fx-ghost ease-in-out infinite}
@keyframes fx-ghost{
  0%,100%{transform:translate3d(0,0,0) rotate(-4deg);opacity:.3}
  50%{transform:translate3d(22px,-30px,0) rotate(5deg);opacity:.8}
}

.fx-ember{position:absolute;bottom:-12px;border-radius:9999px;background:#fb923c;box-shadow:0 0 8px 2px #f97316;animation:fx-rise linear infinite}
@keyframes fx-rise{
  0%{transform:translate3d(0,0,0);opacity:0}
  10%{opacity:1}
  100%{transform:translate3d(var(--drift),-105vh,0);opacity:0}
}

.fx-fog{position:absolute;left:-25%;bottom:-6vh;width:150%;height:32vh;filter:blur(22px);
  background:radial-gradient(ellipse at center,rgba(196,170,255,.22),transparent 70%);
  animation:fx-fog 16s ease-in-out infinite alternate}
@keyframes fx-fog{from{transform:translateX(-7%)}to{transform:translateX(7%)}}

.fx-spider{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;animation:fx-dangle 5s ease-in-out infinite}
.fx-spider b{display:block;width:1px;height:90px;background:rgba(255,255,255,.55)}
@keyframes fx-dangle{0%,100%{transform:translateY(-55px)}50%{transform:translateY(25px)}}

/* ---------- responsiveness / accessibility ---------- */
@media (max-width:639px){.fx-extra{display:none}}
@media (prefers-reduced-motion:reduce){
  .fx *,.fx-bob,.fx-flicker{animation:none !important}
  .fx-flake,.fx-ember,.fx-bat{display:none}
}
`;

function Snow({ count, seed }: { count: number; seed: number }) {
  const r = rng(seed);
  const flakes = Array.from({ length: count }, (_, i) => {
    const size = 3 + r() * 6;
    return {
      left: r() * 100,
      size,
      dur: 9 + r() * 13,
      delay: -r() * 22,
      drift: (r() * 2 - 1) * 90,
      swayDur: 2.5 + r() * 3,
      opacity: 0.5 + r() * 0.5,
      blur: size > 7 ? 1.5 : 0,
      extra: i >= count * 0.55,
    };
  });

  return (
    <>
      {flakes.map((f, i) => (
        <span
          key={i}
          className={`fx-flake ${f.extra ? "fx-extra" : ""}`}
          style={
            {
              left: `${f.left}%`,
              "--drift": `${f.drift}px`,
              animationDuration: `${f.dur}s`,
              animationDelay: `${f.delay}s`,
            } as CSSProperties
          }
        >
          <i
            style={{
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              filter: f.blur ? `blur(${f.blur}px)` : undefined,
              animationDuration: `${f.swayDur}s`,
            }}
          />
        </span>
      ))}
    </>
  );
}

function Stars({ count, seed }: { count: number; seed: number }) {
  const r = rng(seed);
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const size = 1.5 + r() * 2.5;
        return (
          <span
            key={i}
            className={`fx-star ${i >= count * 0.6 ? "fx-extra" : ""}`}
            style={{
              top: `${r() * 55}%`,
              left: `${r() * 100}%`,
              width: size,
              height: size,
              animationDuration: `${2 + r() * 3}s`,
              animationDelay: `${-r() * 4}s`,
            }}
          />
        );
      })}
    </>
  );
}

const BULB_COLORS = ["#ef4444", "#facc15", "#22c55e", "#38bdf8"];

function Lights() {
  return (
    <>
      <div className="fx-wire" />
      <div className="fx-lights">
        {Array.from({ length: 14 }, (_, i) => (
          <span
            key={i}
            className={`fx-bulb ${i % 2 ? "fx-extra" : ""}`}
            style={
              {
                "--c": BULB_COLORS[i % BULB_COLORS.length],
                animationDelay: `${-(i % 5) * 0.4}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}

const BATS = [
  { top: 8, dur: 16, delay: -2, size: "text-2xl sm:text-4xl" },
  { top: 20, dur: 22, delay: -11, size: "text-xl sm:text-3xl" },
  { top: 32, dur: 18, delay: -6, size: "text-2xl sm:text-3xl" },
  { top: 13, dur: 26, delay: -17, size: "text-xl sm:text-2xl" },
  { top: 26, dur: 20, delay: -14, size: "text-2xl sm:text-4xl" },
];

const GHOSTS = [
  { left: "6%", top: "66%", size: 40, dur: 7, delay: 0 },
  { left: "82%", top: "52%", size: 48, dur: 9, delay: -3 },
  { left: "78%", top: "82%", size: 34, dur: 8, delay: -5 },
  { left: "14%", top: "34%", size: 36, dur: 10, delay: -2 },
];

function Halloween() {
  const r = rng(31);
  const embers = Array.from({ length: 22 }, (_, i) => ({
    left: r() * 100,
    size: 2 + r() * 4,
    dur: 7 + r() * 9,
    delay: -r() * 14,
    drift: (r() * 2 - 1) * 60,
    extra: i >= 12,
  }));

  return (
    <>
      <div className="fx-moon" />
      <div className="fx-fog" />

      {/* hanging spider */}
      <div className="fx-spider" style={{ left: "6%" }}>
        <b />
        <span className="text-2xl sm:text-3xl">🕷️</span>
      </div>

      {BATS.map((b, i) => (
        <div
          key={i}
          className={`fx-bat ${i >= 3 ? "fx-extra" : ""}`}
          style={{
            top: `${b.top}%`,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <span className={b.size}>🦇</span>
        </div>
      ))}

      {GHOSTS.map((g, i) => (
        <span
          key={i}
          className={`fx-ghost ${i >= 2 ? "fx-extra" : ""}`}
          style={{
            left: g.left,
            top: g.top,
            fontSize: g.size,
            animationDuration: `${g.dur}s`,
            animationDelay: `${g.delay}s`,
          }}
        >
          👻
        </span>
      ))}

      {embers.map((e, i) => (
        <span
          key={i}
          className={`fx-ember ${e.extra ? "fx-extra" : ""}`}
          style={
            {
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              "--drift": `${e.drift}px`,
              animationDuration: `${e.dur}s`,
              animationDelay: `${e.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </>
  );
}

export default function Effects({ theme }: { theme: ThemeName }) {
  if (theme === "default") return null;

  return (
    <>
      <style>{css}</style>
      <div aria-hidden className="fx">
        {theme === "halloween" && <Halloween />}
        {theme === "winter" && (
          <>
            <div className="fx-aurora" />
            <Snow count={70} seed={11} />
          </>
        )}
        {theme === "christmas" && (
          <>
            <Stars count={28} seed={5} />
            <Snow count={55} seed={23} />
            <Lights />
          </>
        )}
      </div>
    </>
  );
}