import { getPeriodDate } from '../../../utils/dateUtils';
import { LogoBullet } from '../../atoms';
import { InfoCard } from '../InfoCard';

const education = [
  {
    img: 'src/assets/UIAlogo.png',
    shortName: 'UIA',
    longName: 'Universidad Internacional de las Americas',
    major: "Bachelor's Degree in Software Engineering",
    startDate: '2020-01',
    endDate: '2025-12',
  },
  {
    img: 'src/assets/UCreativalogo.jpg',
    shortName: 'UCreativa',
    longName: 'Universidad Creativa',
    major: 'Front End Web Development',
    startDate: '2019-09',
    endDate: '2020-08',
  },
];

export const Education = () => {
  return (
    <InfoCard title="education">
      <div>
        {education.map((el) => {
          let educationDates = '';
          if (getPeriodDate(el.startDate) && getPeriodDate(el.endDate)) {
            educationDates = `From ${getPeriodDate(
              el.startDate
            )} - ${getPeriodDate(el.endDate)}`;
          } else {
            educationDates = 'In Progress';
          }
          return (
            <LogoBullet
              source={el.img}
              name={el.shortName}
              content={educationDates}
              key={el.major}
            >
              <span>
                <p>{el.major}</p>
              </span>
            </LogoBullet>
          );
        })}
      </div>
    </InfoCard>
  );
};
