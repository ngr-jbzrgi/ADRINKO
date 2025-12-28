import About from "../components/About";
import { usePageTitle } from "../hooks/usePageTitle";

export default function AboutPage() {
  usePageTitle("About");

  return <About variant="full" headingAs="h1" />;
}

