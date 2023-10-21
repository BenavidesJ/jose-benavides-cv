import '../../styles/badge.css';

interface BadgeProps {
  text: string;
  aditionalText?: string;
}
export const Badge = ({ text, aditionalText }: BadgeProps) => {
  return (
    <div className="badge">
      {text}
      {aditionalText && <small>{aditionalText}</small>}
    </div>
  );
};
