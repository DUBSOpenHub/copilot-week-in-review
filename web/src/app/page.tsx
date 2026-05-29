"use client";

import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Copy,
  GitPullRequest,
  Layers,
  Lock,
  RefreshCw,
  Sparkles,
  Target,
  Wand2,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Official GitHub Invertocat mark — used here strictly for the standard
// "link to repository" affordance, per GitHub Logos and Usage guidelines:
// https://github.com/logos
function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.15-.02-2.09-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.05.78 2.13 0 1.54-.01 2.78-.01 3.15 0 .3.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

const INSTALL_CMD =
  "curl -fsSL https://raw.githubusercontent.com/DUBSOpenHub/copilot-week-in-review/main/quickstart.sh | bash";

const REPO_URL = "https://github.com/DUBSOpenHub/copilot-week-in-review";

function CopyInstall({ size = "default" }: { size?: "default" | "sm" }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };
  return (
    <div
      className={`group flex items-stretch w-full max-w-[760px] rounded-lg border bg-card text-left transition-[border-color,box-shadow] hover:border-primary/40 hover:shadow-[0_0_0_4px_color-mix(in_oklch,var(--primary)_10%,transparent)] focus-within:ring-[3px] focus-within:ring-ring/30 focus-within:border-ring`}
    >
      <span
        aria-hidden
        className="self-center pl-4 text-primary font-mono font-semibold select-none"
      >
        $
      </span>
      <code className="flex-1 min-w-0 overflow-x-auto whitespace-nowrap px-3 py-3 font-mono text-[13px] text-foreground bg-transparent">
        {INSTALL_CMD}
      </code>
      <Button
        type="button"
        onClick={handleCopy}
        variant="default"
        size={size === "sm" ? "sm" : "default"}
        className="rounded-l-none border-l shrink-0"
        aria-label="Copy install command"
      >
        {copied ? (
          <>
            <CheckCircle2 className="size-4" />
            <span className="hidden sm:inline">Copied</span>
          </>
        ) : (
          <>
            <Copy className="size-4" />
            <span className="hidden sm:inline">Copy</span>
          </>
        )}
      </Button>
    </div>
  );
}

const features = [
  {
    icon: Target,
    title: "Two-question intake",
    body: (
      <>
        The agent asks <strong className="text-foreground">Source</strong>{" "}
        (notes / GitHub pull / both) and{" "}
        <strong className="text-foreground">Audience</strong> (manager / team /
        yourself). That&apos;s it. No flags, no config.
      </>
    ),
  },
  {
    icon: GitPullRequest,
    title: "Auto-pulls from GitHub",
    body: (
      <>
        Pick &ldquo;pull from my GitHub&rdquo; and the agent uses{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          gh
        </code>{" "}
        to gather your last 7 days of PRs, reviews, issues, and comments —
        grouped by workstream, noise filtered out.
      </>
    ),
  },
  {
    icon: Layers,
    title: "Audience-aware tone",
    body: (
      <>
        <strong className="text-foreground">Manager</strong> leads with
        outcomes & impact. <strong className="text-foreground">Team</strong>{" "}
        highlights handoffs & what&apos;s next.{" "}
        <strong className="text-foreground">Yourself</strong> keeps your voice
        & small wins.
      </>
    ),
  },
  {
    icon: CheckCircle2,
    title: "Issue-ready output",
    body: (
      <>
        GitHub-flavored markdown with{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          - [x]
        </code>{" "}
        checkboxes your team can <em>click</em> as work ships. Paste it
        straight into an issue, Slack, or email.
      </>
    ),
  },
  {
    icon: Wand2,
    title: "No repo required",
    body: (
      <>
        Runs in any GitHub Copilot app session or Copilot CLI session. No
        setup, no cloned project, no boilerplate. Just type{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          @week-in-review
        </code>
        .
      </>
    ),
  },
  {
    icon: RefreshCw,
    title: "Conversational refinement",
    body: (
      <>
        Ask for &ldquo;more casual,&rdquo; &ldquo;punchier,&rdquo;
        &ldquo;switch audience to team,&rdquo; or &ldquo;open it as an issue
        in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          myorg/updates
        </code>
        .&rdquo; Iterate in plain English.
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ── topnav ── */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <Calendar className="size-4 text-primary" />
            <span>
              week in review
              <span className="text-muted-foreground/70 font-normal">
                {" "}
                · by Copilot
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <a href="#features">What you get</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#demo">See it work</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#install">Install</a>
            </Button>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" aria-label="View repository on GitHub">
              <GithubMark className="size-4" />
              View repo
              <ArrowRight className="size-3.5 opacity-60" />
            </a>
          </Button>
        </div>
      </header>

      {/* ── hero ── */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border/60"
      >
        <div className="glow" aria-hidden />
        <div className="grid-bg" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center md:pt-28 md:pb-32">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Works in the GitHub Copilot app · or the Copilot CLI
          </Badge>

          <h1 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-7xl lg:text-[5rem] leading-[1.02]">
            Your week,
            <br />
            <span className="text-gradient">written for you</span>
            <span className="text-primary">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
            Turn messy notes <em className="not-italic font-medium text-foreground">or</em> raw GitHub activity into a polished,
            audience-tuned, GitHub-issue-ready status update in seconds. Two
            questions, zero blank-page panic.
          </p>

          <div className="mt-10 flex justify-center">
            <CopyInstall />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Then type{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              @week-in-review
            </code>{" "}
            in the Copilot app or CLI.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs">
            {[
              "One agent file",
              "No API keys",
              "Reads your GitHub via gh",
              "MIT licensed",
            ].map((b) => (
              <Badge key={b} variant="outline" className="rounded-full gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                {b}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* ── features ── */}
        <section
          id="features"
          className="mx-auto max-w-6xl px-6 py-24 md:py-32"
        >
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              What you actually get
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Most weekly-update tools make you type the input. This one skips
              the typing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <Card
                key={title}
                className="group relative gap-3 py-6 transition-[transform,border-color] hover:-translate-y-1 hover:border-primary/40"
              >
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {body}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── demo ── */}
        <section
          id="demo"
          className="relative border-y border-border/60 bg-card/30"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Live demo
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                See it work
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                A real flow — three lines in, a manager-ready update out.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {/* terminal */}
              <Card className="overflow-hidden py-0 gap-0">
                <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2.5">
                  <span className="inline-block size-3 rounded-full bg-red-500/80" />
                  <span className="inline-block size-3 rounded-full bg-amber-500/80" />
                  <span className="inline-block size-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    GitHub Copilot — @week-in-review
                  </span>
                </div>
                <pre className="cursor m-0 overflow-x-auto p-5 font-mono text-[13px] leading-[1.7] text-foreground whitespace-pre-wrap">
                  <span className="text-primary font-semibold">you</span>{"  "}@week-in-review{"\n"}
                  <span className="text-purple-400 font-semibold">agent</span>{"  "}How should I build this week&apos;s review?{"\n"}
                  {"        "}<span className="text-emerald-400">› Pull from my GitHub activity</span>{"\n"}
                  <span className="text-purple-400 font-semibold">agent</span>{"  "}Who&apos;s the audience?{"\n"}
                  {"        "}<span className="text-emerald-400">› My manager</span>{"\n"}
                  <span className="text-purple-400 font-semibold">agent</span>{"  "}<span className="text-muted-foreground italic">running `gh search` for the last 7 days…</span>{"\n"}
                  {"        "}<span className="text-muted-foreground italic">found 12 PRs, 5 reviews, 8 issues. grouping by workstream…</span>{"\n"}
                  {"        "}<span className="text-muted-foreground italic">tuning tone for leadership…</span>{"\n"}
                  {"        "}<span className="text-emerald-400 font-semibold">✓ done — pasting below ↓</span>
                </pre>
              </Card>

              {/* output */}
              <Card className="overflow-hidden py-0 gap-0">
                <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2.5">
                  <span className="text-xs text-muted-foreground font-medium">
                    issue body — ready to paste
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-mono">
                    title · labels · md
                  </span>
                </div>
                <div className="p-6 text-sm">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="rounded-full text-[10px] tracking-wider uppercase font-semibold"
                      >
                        Title
                      </Badge>
                      <span className="text-foreground">
                        Week in Review — Mar 17–21, 2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="rounded-full text-[10px] tracking-wider uppercase font-semibold"
                      >
                        Labels
                      </Badge>
                      <Badge variant="soft" className="rounded-full">
                        weekly-update
                      </Badge>
                      <Badge variant="soft" className="rounded-full">
                        status
                      </Badge>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <h4 className="text-sm font-semibold mt-3 mb-2">TL;DR</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Shipped Checkout v2 behind a feature flag, cleared the
                    flaky login tests, and kicked off the API rate-limit
                    design doc. Oncall starts Monday.
                  </p>

                  <h4 className="text-sm font-semibold mt-4 mb-2">
                    ✅ Shipped this week
                  </h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <span className="text-emerald-500 mr-1.5">☑</span>
                      <strong className="text-foreground font-semibold">
                        Checkout v2 — live behind a feature flag
                      </strong>{" "}
                      — ready for staged rollout next week.
                    </li>
                    <li>
                      <span className="text-emerald-500 mr-1.5">☑</span>
                      <strong className="text-foreground font-semibold">
                        Fixed two flaky login tests
                      </strong>{" "}
                      — login suite back to green.
                    </li>
                    <li>
                      <span className="text-emerald-500 mr-1.5">☑</span>
                      <strong className="text-foreground font-semibold">
                        Reviewed 6 PRs
                      </strong>{" "}
                      — kept the team unblocked.
                    </li>
                  </ul>

                  <h4 className="text-sm font-semibold mt-4 mb-2">
                    🚧 In progress
                  </h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <span className="text-muted-foreground mr-1.5">☐</span>
                      <strong className="text-foreground font-semibold">
                        API rate-limit design doc
                      </strong>{" "}
                      — first draft underway, ready for review next week.
                    </li>
                  </ul>

                  <h4 className="text-sm font-semibold mt-4 mb-2">
                    🔭 Next week
                  </h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <span className="text-muted-foreground mr-1.5">☐</span>
                      🚨{" "}
                      <strong className="text-foreground font-semibold">
                        Oncall rotation starts Monday.
                      </strong>{" "}
                      Slower response on non-urgent items.
                    </li>
                    <li>
                      <span className="text-muted-foreground mr-1.5">☐</span>{" "}
                      Begin staged rollout of Checkout v2.
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
              Prefer notes? Pick{" "}
              <em className="not-italic font-medium text-foreground">
                &ldquo;Paste my own notes&rdquo;
              </em>{" "}
              in the intake and dump whatever you&apos;ve got — bullets, brain
              dump, raw PR titles, meeting fragments. Same polished output.
            </p>
          </div>
        </section>

        {/* ── install ── */}
        <section id="install" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Get started
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Install in 30 seconds
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            <Card className="flex flex-row items-start gap-5 py-6 px-6 transition-[border-color] hover:border-primary/40">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 text-primary font-bold shrink-0">
                1
              </div>
              <div className="flex-1 min-w-0 space-y-3">
                <p className="font-semibold text-base">Install the agent</p>
                <CopyInstall size="sm" />
                <p className="text-xs text-muted-foreground">
                  Drops one file into{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-foreground">
                    ~/.copilot/agents/
                  </code>
                  . No git clone, no config, no API keys.
                </p>
              </div>
            </Card>

            <Card className="flex flex-row items-start gap-5 py-6 px-6 transition-[border-color] hover:border-primary/40">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 text-primary font-bold shrink-0">
                2
              </div>
              <div className="flex-1 min-w-0 space-y-3">
                <p className="font-semibold text-base">Use it</p>
                <p className="text-sm text-muted-foreground">
                  In either the{" "}
                  <strong className="text-foreground">
                    GitHub Copilot app
                  </strong>{" "}
                  or a <strong className="text-foreground">Copilot CLI</strong>{" "}
                  session, type:
                </p>
                <div className="inline-flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-2 font-mono text-sm">
                  <ChevronRight className="size-4 text-primary" />
                  <span>@week-in-review</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Answer the two intake questions. Done.
                </p>
              </div>
            </Card>

            <Accordion
              type="single"
              collapsible
              className="rounded-xl border bg-card px-5"
            >
              <AccordionItem value="other" className="border-b-0">
                <AccordionTrigger className="text-sm font-medium text-muted-foreground hover:no-underline hover:text-foreground">
                  Other install options
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-0">
                  <div>
                    <p className="mb-2 text-sm font-medium">
                      Via the Copilot CLI:
                    </p>
                    <pre className="overflow-x-auto rounded-md border bg-muted/40 px-4 py-3 font-mono text-xs">
                      /agents add DUBSOpenHub/copilot-week-in-review
                    </pre>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium">
                      Clone + install (for remixing):
                    </p>
                    <pre className="overflow-x-auto rounded-md border bg-muted/40 px-4 py-3 font-mono text-xs">
                      {`git clone https://github.com/DUBSOpenHub/copilot-week-in-review.git
cd copilot-week-in-review && ./install.sh`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p className="text-center text-xs text-muted-foreground pt-4">
              <strong className="text-foreground">Requirements:</strong>{" "}
              GitHub Copilot (
              <a href="https://github.com/features/copilot" className="text-primary underline-offset-4 hover:underline">
                subscription
              </a>
              ) · macOS, Linux, or WSL · the{" "}
              <a href="https://cli.github.com/" className="text-primary underline-offset-4 hover:underline">
                gh CLI
              </a>{" "}
              for the &quot;pull from GitHub&quot; mode (
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-[11px]">
                gh auth login
              </code>{" "}
              once).
            </p>
          </div>
        </section>

        {/* ── privacy ── */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Card className="mx-auto max-w-3xl">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 shrink-0">
                <Lock className="size-5" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-lg">Privacy</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Your notes stay in your Copilot session. When you pick the{" "}
                  <em>&ldquo;pull from GitHub&rdquo;</em> mode, the agent runs{" "}
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                    gh
                  </code>{" "}
                  locally as you — nothing leaves your machine except the
                  GitHub API calls{" "}
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                    gh
                  </code>{" "}
                  already makes on your behalf. No telemetry, no analytics, no
                  third parties.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                <Sparkles className="size-3.5 text-primary" />
                Tool-light by design:{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono">
                  ask_user
                </code>{" "}
                for the intake,{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono">
                  gh
                </code>{" "}
                (read-only) for the GitHub pull. That&apos;s it.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* ── footer ── */}
      <footer className="border-t border-border/60 bg-card/30 mt-auto">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between text-sm">
          <div className="flex items-center gap-3">
            <Calendar className="size-5 text-primary" />
            <div>
              <p className="font-semibold leading-tight">
                Copilot Week in Review
              </p>
              <p className="text-xs text-muted-foreground italic">
                Your week, written for you.
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <a href={REPO_URL} className="hover:text-foreground transition-colors">
              Source
            </a>
            <a
              href={`${REPO_URL}/issues`}
              className="hover:text-foreground transition-colors"
            >
              Issues
            </a>
            <a
              href={`${REPO_URL}/blob/main/LICENSE`}
              className="hover:text-foreground transition-colors"
            >
              MIT
            </a>
            <a
              href={`${REPO_URL}/blob/main/SECURITY.md`}
              className="hover:text-foreground transition-colors"
            >
              Security
            </a>
          </nav>
        </div>
        <div className="border-t border-border/40 py-4 text-center text-[11px] text-muted-foreground">
          Built with 💜 in the{" "}
          <a
            href="https://github.com/features/copilot"
            className="text-primary underline-offset-4 hover:underline"
          >
            GitHub Copilot app
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/DUBSOpenHub"
            className="text-primary underline-offset-4 hover:underline"
          >
            @DUBSOpenHub
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
