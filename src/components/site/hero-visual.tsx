"use client";

import { motion, useReducedMotion } from "motion/react";
import { Captions, Clapperboard, Hash, SearchCheck } from "lucide-react";

import { consoleRows, timelineTracks } from "@/lib/content";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-card/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 mesh-lines opacity-70" />
      <div className="pointer-events-none absolute inset-0 scanline opacity-35" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground">
            Creator studio
          </p>
          <h2 className="mt-1 text-lg font-semibold">
            Edit, package, export
          </h2>
        </div>
        <motion.div
          className="flex size-10 items-center justify-center rounded-md border border-signal/40 bg-signal/10 text-signal"
          animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Clapperboard className="size-5" />
        </motion.div>
      </div>

      <div className="relative mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-md border border-white/10 bg-background/72 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium">Vertical reel timeline</p>
            <span className="rounded-md border border-ember/25 bg-ember/10 px-2 py-1 font-mono text-xs text-ember">
              9:16
            </span>
          </div>
          <div className="grid gap-3">
            {timelineTracks.map((track, index) => (
              <motion.div
                key={track.label}
                className="grid grid-cols-[4.5rem_1fr] items-center gap-3"
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <track.icon className="size-3.5 text-signal" />
                  {track.label}
                </div>
                <div className="h-8 rounded-md border border-white/10 bg-white/[0.035] p-1">
                  <motion.div
                    className="h-full rounded-[0.35rem] bg-[linear-gradient(90deg,var(--signal),var(--ember))]"
                    initial={{ width: reduceMotion ? track.width : "18%" }}
                    animate={{ width: track.width }}
                    transition={{
                      duration: 1,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-md border border-white/10 bg-background/72 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium">
              <Captions className="size-4 text-ember" />
              Caption pass
            </div>
            <div className="flex flex-wrap gap-2">
              {["Hook first", "Clean cuts", "Readable captions"].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-white/10 bg-background/72 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium">
              <SearchCheck className="size-4 text-signal" />
              Title option
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              How to Turn One Raw Clip into 3 Social Posts
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-5 grid gap-3">
        {consoleRows.map((row, index) => (
          <motion.div
            key={row.label}
            className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md border border-white/10 bg-background/72 p-3"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.24 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div>
              <p className="text-sm font-medium">{row.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{row.value}</p>
            </div>
            <span
              className={
                row.tone === "signal"
                  ? "size-2 rounded-full bg-signal"
                  : "size-2 rounded-full bg-ember"
              }
            />
          </motion.div>
        ))}
      </div>

      <div className="relative mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium">
            <Hash className="size-4 text-ember" />
            Hashtag set ready
          </div>
          <p className="text-xs leading-5 text-muted-foreground">
            #shortformvideo #contentrepurposing #creatorworkflow
          </p>
        </div>
        <div className="flex items-center justify-center rounded-md border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-signal">
          Shorts / Reels / TikTok
        </div>
      </div>
    </div>
  );
}
