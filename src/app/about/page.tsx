import { Container } from "@/components/container/container";
import { Layout } from "@/components/layout";
import { SidebarMainHeader } from "@/components/sidebar/sidebar-main-header";
import { routerConfig } from "../router-config";
import { ExperienceCard } from "@/features/experience/experience-card";

export default function About() {
  return (
    <Layout>
      <Container className="flex flex-col gap-10">
        <SidebarMainHeader
          breadcrumbs={[
            {
              href: routerConfig.root.path,
              name: "Home",
            },
            {
              href: routerConfig.about.path,
              name: "About",
            },
          ]}
        />
        <ExperienceCard />
      </Container>
    </Layout>
  );
}
