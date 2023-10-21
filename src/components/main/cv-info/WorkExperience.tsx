import { getPeriodDate } from '../../../utils/dateUtils';
import { Badge, LogoBullet } from '../../atoms';
import { InfoCard } from '../InfoCard';

const workExperience = [
  {
    job: 'Front End Developer',
    company: {
      name: 'Globant',
      logo: 'src/assets/Globantlogo.png',
      location: 'Heredia, Costa Rica (Remote)',
    },
    startDate: '2022-04',
    endDate: '',
    tasks: [
      'Migrated Angular-based web applications to React using microfrontend architecture for enhanced modularity and scalability.',
      'Conduct thorough unit testing with React Native Testing Library, React Testing Library, Enzyme and Jest, ensuring robust unit testing coverage to facilitate code refactoring.',
      'Sustain a high test coverage rate to support codebase maintenance and improve code quality.',
      'Develop and maintain reusable components, fostering code reusability and consistency.',
      'Successfully implement upgrades to Single Sign-On libraries, enhancing security and user authentication processes.',
      'Leverage popular CSS frameworks like Material UI and Tailwind CSS for streamlined UI development.',
      'Develop and maintained custom hooks and contexts for intricate application logic management, improving code structure and reusability.',
      'Maintain a minimum average of 17 contributions per sprint to repositories, creating code and thorough pull request reviews.',
    ],
    techStack: [
      'React',
      'React Native',
      'Typescript',
      'Apollo GraphQL',
      'Redux toolkit',
      'Git',
      'Jest',
      'Styled-components',
      'CSS',
      'Single SPA (Microfronted)',
      'NX (Monorepo)',
      'React/React Native Testing Library',
      'React Query',
      'Axios',
    ],
  },
  {
    job: 'Front End Developer',
    company: {
      name: 'Accenture',
      logo: 'src/assets/Accenturelogo.png',
      location: 'Heredia, Costa Rica (Remote)',
    },
    startDate: '2021-11',
    endDate: '2022-04',
    tasks: [
      'Plan and perform responsive websites or front-end development.',
      'Maintain the layout of responsive websites as per the defined guidelines and provided designs.',
      'Websites content uploading and maintenance.',
      'Support and troubleshoot the day to day technical needs for existing websites.',
      'Complete unit testing of all development code.',
      'Apply problem solving and technical skills to debug code.',
      'Succesfully research and integration of apis to create dynamic A/B testing campaings',
    ],
    techStack: [
      'Angular',
      'HTML',
      'Typescript',
      'React',
      'Adobe target',
      'Git',
      'Jest',
      'CSS',
    ],
  },
];

export const WorkExperience = () => {
  return (
    <InfoCard title="work experience">
      <div className="work_experience-wrapper">
        {workExperience.map((el) => (
          <LogoBullet
            key={el.company.name}
            name={`${el.job} - ${el.company.name}`}
            content={
              <div className="work_experience-bagde-content">
                <Badge
                  text={`${getPeriodDate(el.startDate)} -> ${
                    getPeriodDate(el.endDate) || 'Present'
                  }`}
                />
                <span>{el.company.location}</span>
              </div>
            }
            source={el.company.logo}
          >
            <ul className="work_experience-tasks">
              {el.tasks.map((task, idx) => (
                <li key={idx + el.job + el.company.name}>{task}</li>
              ))}
            </ul>
            <h4>Tech stack</h4>
            <div className="work_experience-techstack-content">
              {el.techStack.map((ts) => (
                <Badge key={ts} text={ts} />
              ))}
            </div>
          </LogoBullet>
        ))}
      </div>
    </InfoCard>
  );
};
