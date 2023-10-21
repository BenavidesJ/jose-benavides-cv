import {
  Education,
  Languages,
  Links,
  Skills,
  Statement,
  WorkExperience,
} from './cv-info';

export const MainSection = () => {
  return (
    <main>
      <Statement />
      <Education />
      <Links />
      <Skills />
      <Languages />
      <WorkExperience />
    </main>
  );
};
