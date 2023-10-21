import { Badge } from '../../atoms';
import { InfoCard } from '../InfoCard';

const languages = [
  {
    lan: 'spanish',
    level: 'native',
  },
  {
    lan: 'english',
    level: 'B2+/C1',
  },
  {
    lan: 'japanese',
    level: 'JLPT N4',
  },
];

export const Languages = () => {
  return (
    <InfoCard title="languages">
      <div className="languages-wrapper">
        <div>
          <div className="languages-content">
            {languages.map((el) => (
              <Badge key={el.lan} text={el.lan} aditionalText={el.level} />
            ))}
          </div>
        </div>
      </div>
    </InfoCard>
  );
};
