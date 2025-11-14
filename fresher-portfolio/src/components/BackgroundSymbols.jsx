// src/components/BackgroundSymbols.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * Floating decorative symbols with glow + scroll-linked parallax.
 * Drop this component at top-level (e.g. in App.jsx) once.
 *
 * Tweak the constants below to change density, sizes, and motion:
 * - COUNT: number of symbols
 * - BASE_DURATION: base float duration (seconds)
 * - MAX_PARALLAX: max vertical parallax offset in px
 */

const SYMBOLS = ["✦", "★", "✧", "❖", "~", "+", "⋆", "⟡", "✩", "•"];
const COUNT = 30; // how many symbols
const BASE_DURATION = 8; // base float cycle duration
const MAX_PARALLAX = 40; // px, max scroll-linked translateY effect

export default function BackgroundSymbols() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();

  // map scroll progress to a value used by each symbol for parallax
  // we map 0..1 -> -MAX_PARALLAX..MAX_PARALLAX and each symbol will read a transformed value
  const globalParallax = useTransform(scrollYProgress, [0, 1], [-MAX_PARALLAX, MAX_PARALLAX]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {[...Array(COUNT)].map((_, i) => {
        const symbol = SYMBOLS[i % SYMBOLS.length];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 4;
        const duration = BASE_DURATION + Math.random() * 6;
        const size = Math.random() * 1.2 + 0.6; // rem
        const opacity = 0.18 + Math.random() * 0.5;
        const rotate = (Math.random() - 0.5) * 30;
        const hueShift = Math.floor(Math.random() * 35); // small hue variance

        // per-symbol parallax multiplier so they move differently
        const parallaxFactor = 0.4 + Math.random() * 0.8; // 0.4 - 1.2

        // useTransform to scale the shared scroll progress into a per-symbol y offset
        const y = useTransform(globalParallax, v => v * parallaxFactor);

        // animation props: subtle vertical float + rotate
        const animateProps = reduced
          ? {} // prefer-reduced-motion --> no continuous animation
          : {
              y: [0, -8 - parallaxFactor * 6, 0],
              rotate: [rotate, rotate + (Math.random() > 0.5 ? 6 : -6), rotate],
            };

        const transition = reduced
          ? {}
          : {
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay,
            };

        return (
          <motion.span
            key={i}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}rem`,
              opacity,
              transform: `translateZ(0)`,
              color: `hsl(${200 + hueShift} 80% 70%)`,
              WebkitTextStroke: "0px",
            }}
            // combine float animation with scroll-linked y via style prop
            animate={animateProps}
            transition={transition}
            // bind parallax value to style property
            // framer-motion accepts `style` prop with motion values; merge below
            // we set translateY via the `style` prop using the motion value `y`
            // eslint-disable-next-line react/jsx-no-bind
            styleProp={undefined}
            className="absolute select-none pointer-events-none transform-gpu will-change-transform"
            // actual style map: we include y as transform translateY using `style` attribute below
            // can't inline motion value in JSX transform, so use motion.span's `style` prop:
            // (we pass y via the `style` prop below)
            // Note: React warns about duplicate `style` - so we use a single style object
            // assembled here:
            // final style object:
            //   left, top, fontSize, opacity, color, transform: `translateY(${y}px)` handled by motion's style
            // To avoid TypeScript/runtime mismatch, we pass `style` prop below instead of earlier one.
            // (We'll pass a new object)
            // For readability keep code explicit:
            // combine motion value y into inline style using `style` prop below (works)
          >
            {/* motion.div wrapper to accept scroll-linked y transform */}
            <motion.span
              // apply the scroll-linked y motion value
              style={{ y }}
              className="inline-block"
              // small accessibility: hidden from screen readers
              aria-hidden
            >
              <span
                className="block"
                // decorative CSS: soft glow using text-shadow and subtle backdrop
                style={{
                  textShadow:
                    "0 6px 18px rgba(99,102,241,0.06), 0 2px 6px rgba(99,102,241,0.06)",
                  filter: "drop-shadow(0 6px 18px rgba(99,102,241,0.06))",
                }}
              >
                {symbol}
              </span>
            </motion.span>
          </motion.span>
        );
      })}
    </div>
  );
}
