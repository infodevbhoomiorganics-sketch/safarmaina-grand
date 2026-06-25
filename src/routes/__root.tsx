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
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-sm tracking-[0.3em] text-accent uppercase">404</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The trail you took doesn't lead anywhere. Let's get you back to the resort.</p>
        <Link to="/" className="mt-8 inline-block luxury-link text-accent tracking-wider uppercase text-sm">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl">Something went quiet on the mountain</h1>
        <p className="mt-3 text-muted-foreground text-sm">Please try again.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 px-6 py-3 bg-foreground text-background text-sm tracking-wider uppercase">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Safarmaina Resort — A Brookside Retreat With A Pool | Kasauli, Himachal" },
      { name: "description", content: "Safarmaina Resort — a luxury brookside retreat near the old waterfall in Garkhal, Kasauli. Mountain views, pool, restaurant & nature trails in Himachal Pradesh." },
      { name: "author", content: "Safarmaina Resort" },
      { name: "keywords", content: "Kasauli Resort, Luxury Resort Kasauli, Resort in Garkhal, Hotel Near Waterfall Kasauli, Mountain Resort Himachal, Pet Friendly Resort Kasauli, Swimming Pool Resort Kasauli" },
      { property: "og:title", content: "Safarmaina Resort — A Brookside Retreat With A Pool" },
      { property: "og:description", content: "A luxury brookside retreat near the old waterfall in Garkhal, Kasauli, Himachal Pradesh." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Safarmaina Resort" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Resort",
        name: "Safarmaina Resort",
        description: "A Brookside Retreat With A Pool near the old waterfall in Garkhal, Kasauli.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Parwanoo Kasauli Road, Near Old Waterfall, Garkhal",
          addressLocality: "Kasauli",
          addressRegion: "Himachal Pradesh",
          postalCode: "173204",
          addressCountry: "IN",
        },
        telephone: "+91 98218 70540",
        checkinTime: "13:00",
        checkoutTime: "11:00",
        amenityFeature: ["Swimming Pool","Natural Waterfall","Restaurant","Free WiFi","Parking","Pet Friendly","Bonfire","Mountain View"],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
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
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
