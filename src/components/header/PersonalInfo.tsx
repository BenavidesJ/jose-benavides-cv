import '../../styles/personal-info.css';

interface PersonalInfoProps {
  type: string;
  data: string;
}

export const PersonalInfo = ({ type, data }: PersonalInfoProps) => {
  return (
    <div className="personal-info">
      <h5 className="personal-info_title">{type}</h5>
      <span className="personal-info_body">{data}</span>
    </div>
  );
};
