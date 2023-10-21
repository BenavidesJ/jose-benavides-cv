import '../../styles/logo-bullet.css';

interface LogoBulletProps {
  source?: string;
  name: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  content?: string | React.ReactNode;
  link?: string;
}
export const LogoBullet = ({
  source,
  name,
  content,
  link,
  children,
  icon,
}: LogoBulletProps) => {
  return (
    <>
      <div className="logo-bullet">
        {/* logo img */}
        {source && (
          <div className="logo-img">
            <img src={source} alt={`${name} logo`} />
          </div>
        )}
        {icon && <div className="logo-img">{icon}</div>}
        {/* nombre */}
        <div className="logo-info">
          <h2>{name}</h2>
          {content && <div className="logo-info_content">{content}</div>}
          {link && (
            <div>
              <a href={link}>{link}</a>
            </div>
          )}
        </div>
      </div>
      <div className="logo-children">{children && children}</div>
    </>
  );
};
