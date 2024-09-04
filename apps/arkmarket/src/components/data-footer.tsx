import type { PropsWithClassName } from "@ark-market/ui";
import { cn } from "@ark-market/ui";
import DiscordIcon from "@ark-market/ui/icons/discord-icon";
import GithubIcon from "@ark-market/ui/icons/github-icon";
import XIcon from "@ark-market/ui/icons/x-icon";
import { Separator } from "@ark-market/ui/separator";

import ExternalLink from "~/components/external-link";
import Prices from "~/components/prices";
import SystemStatus from "~/components/system-status";
import { siteConfig } from "~/config/site";

export default function DataFooter({ className }: PropsWithClassName) {
  return (
    <footer
      className={cn(
        "font-numbers h-10 items-center justify-between border-t border-border bg-background px-5 text-xs",
        className,
      )}
    >
      <div className="flex h-full items-center gap-4">
        <SystemStatus />
        <Separator orientation="vertical" />
        <ExternalLink href={siteConfig.links.twitter}>
          <XIcon />
        </ExternalLink>
        <ExternalLink href={siteConfig.links.discord}>
          <DiscordIcon />
        </ExternalLink>
        <ExternalLink href={siteConfig.links.github}>
          <GithubIcon className="size-4" />
        </ExternalLink>
        <Separator orientation="vertical" />
      </div>
      <Prices />
    </footer>
  );
}
