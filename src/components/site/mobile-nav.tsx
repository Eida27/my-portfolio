"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import type { NavItem } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  useEffect(() => {
    if (open || !pendingHref) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(pendingHref);

      if (!target) {
        setPendingHref(null);
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const top = target.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      window.history.replaceState(null, "", pendingHref);
      setPendingHref(null);
    }, 260);

    return () => window.clearTimeout(timeout);
  }, [open, pendingHref]);

  function handleSectionClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    setPendingHref(href);
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(88vw,22rem)] border-white/10">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Jump to the main portfolio sections.
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-8 grid gap-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleSectionClick(event, item.href)}
              className="rounded-md px-3 py-3 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
