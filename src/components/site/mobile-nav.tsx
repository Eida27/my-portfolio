"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import type { NavItem } from "@/lib/content";
import { scheduleScrollToHash } from "@/lib/smooth-scroll";
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

    return scheduleScrollToHash(pendingHref, {
      onComplete: () => setPendingHref(null),
    });
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
              className="cursor-pointer rounded-md border border-transparent px-3 py-3 text-sm text-muted-foreground transition hover:border-white/10 hover:bg-white/5 hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
