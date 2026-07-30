import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-text-primary">Page not found</h2>
        <p className="mt-2 text-sm text-text-tertiary">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-aurora px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-text-primary">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-text-tertiary">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-aurora px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full glass px-5 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-strong"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mustafa Dahodwala — Data Science Student & Aspiring AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mustafa Dahodwala — B.Sc. Data Science student building end-to-end Machine Learning and AI projects. Actively seeking Data Science, ML, AI, and Python internships.",
      },
      { name: "author", content: "Mustafa Dahodwala" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mustafa Dahodwala" },
      { property: "og:title", content: "Mustafa Dahodwala — Data Science & AI Engineer in the Making" },
      {
        property: "og:description",
        content:
          "Data Science student turning messy data into decisions. Open to Data Science, ML, AI, and Python internships.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mustafa Dahodwala — Data Science & AI" },
      {
        name: "twitter:description",
        content:
          "Portfolio of a Data Science student building ML & AI projects. Available for internships.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mustafa Dahodwala",
          jobTitle: "Data Science Student",
          description:
            "Data Science student and aspiring AI engineer building end-to-end machine learning and AI projects.",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "B.K. Birla College of Arts, Science & Commerce",
            address: "Kalyan, Maharashtra, India",
          },
          // TODO: replace with real profile URLs
          sameAs: [
            "https://github.com/mustafadahodwala51-design",
            "https://www.linkedin.com/in/mustafa-dahodwala-876b78366",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
