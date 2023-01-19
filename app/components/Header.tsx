import { Navigation } from "./client-components/Navigation";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="container mx-auto py-5 flex flex-wrap justify-between lg:px-0 px-6">
      <Logo className="h-6 lg:h-10" />
      <Navigation />
    </header>
  )
}