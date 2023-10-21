import { LogoBullet } from '../../atoms';
import { InfoCard } from '../InfoCard';
import { GrLinkedin, GrGithub } from 'react-icons/gr';

export const Links = () => {
  return (
    <InfoCard title="links">
      <LogoBullet
        name="LinkedIn"
        link={'https://www.linkedin.com/in/benavidesj/'}
        icon={<GrLinkedin id="linkedin" />}
      />
      <LogoBullet
        name="Github"
        link={'https://github.com/BenavidesJ'}
        icon={<GrGithub id="github" />}
      />
    </InfoCard>
  );
};
