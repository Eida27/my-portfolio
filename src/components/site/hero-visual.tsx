"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, RadioTower, ShieldCheck } from "lucide-react";

import { consoleRows } from "@/lib/content";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-card/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 mesh-lines opacity-70" />
      <div className="pointer-events-none absolute inset-0 scanline opacity-40" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground">
            Client ops cockpit
          </p>
          <h2 className="mt-1 text-lg font-semibold">Daily control layer</h2>
        </div>
        <motion.div
          className="flex size-10 items-center justify-center rounded-md border border-signal/40 bg-signal/10 text-signal"
          animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <RadioTower className="size-5" />
        </motion.div>
      </div>

      <div className="relative mt-5 grid gap-3">
        {consoleRows.map((row, index) => (
          <motion.div
            key={row.label}
            className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md border border-white/10 bg-background/72 p-3"
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
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
            <ShieldCheck className="size-4 text-ember" />
            Focus window protected
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <motion.div
              className="h-2 rounded-full bg-ember"
              initial={{ width: reduceMotion ? "76%" : "18%" }}
              animate={{ width: "76%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-signal">
          Async-ready
          <ArrowRight className="ml-2 size-4" />
        </div>
      </div>
    </div>
  );
}
