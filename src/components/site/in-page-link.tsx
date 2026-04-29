"use client";

import { forwardRef } from "react";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

import { scrollToHash } from "@/lib/smooth-scroll";

type InPageLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const InPageLink = forwardRef<HTMLAnchorElement, InPageLinkProps>(
  function InPageLink({ href, onClick, children, ...props }, ref) {
    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
      onClick?.(event);

      if (event.defaultPrevented || !href.startsWith("#")) {
        return;
      }

      event.preventDefault();
      scrollToHash(href);
    }

    return (
      <a ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  },
);
