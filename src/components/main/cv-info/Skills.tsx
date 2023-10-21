import { Badge } from '../../atoms';
import { InfoCard } from '../InfoCard';

const skills = [
  'html',
  'css',
  'typescript',
  'ecma6+',
  'react',
  'react-native',
  'redux',
  'angular',
  'nodejs',
  'express',
  'graphql',
  'mysql',
  'tailwind css',
  'chakra ui',
];
const currentlyLearning = ['rust', '.net', 'ci/cd'];

export const Skills = () => {
  return (
    <InfoCard title="skills">
      <div className="skills-wrapper">
        <div>
          <h4>Web Development</h4>
          <div className="skills-content">
            {skills.map((el) => (
              <Badge key={el} text={el} />
            ))}
          </div>
        </div>
        <div>
          <h4>Currently learning</h4>
          <div className="skills-content">
            {currentlyLearning.map((el) => (
              <Badge key={el} text={el} />
            ))}
          </div>
        </div>
      </div>
    </InfoCard>
  );
};
