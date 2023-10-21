import '../../styles/info-card.css';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export const InfoCard = ({ title, children }: InfoCardProps) => {
  const cardTitle = title.toUpperCase();
  return (
    <div className="info-card">
      <div className="info-card_title">{cardTitle}</div>
      <div>{children}</div>
    </div>
  );
};
