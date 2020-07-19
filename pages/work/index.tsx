import { Hero } from "../../components/sections/hero";
import { Work } from "../../components/sections/work";
import { Footer } from "../../components/sections/footer";
import { Project } from "../../types/project";
import { getBlogTable } from "../../core/blog";
import { config } from "../../config";

interface AppProps {
  projects: Project[];
}

export const getStaticProps = async (): Promise<{
  props: AppProps;
  unstable_revalidate: number;
}> => {
  const projects = await getBlogTable<Project>(config.notionProjectTableId);

  return {
    props: {
      projects: projects.filter(post => post.published),
    },
    unstable_revalidate: 10,
  };
};

export default ({ projects }: AppProps) => (
  <>
    <Hero />
    <Work projects={projects} />
    <Footer />
  </>
);
