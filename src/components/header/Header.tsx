import { PersonalInfo } from './PersonalInfo';

const personalData = [
  { type: 'email', data: 'jdanielbenavides@hotmail.com' },
  { type: 'phone', data: '(+506) 7019-2643' },
  { type: 'website', data: 'https://www.google.com/?hl=es' },
];

export const Header = () => {
  return (
    <header>
      {/* Nombre */}
      <div>
        <h1>Jose D. Benavides Obando</h1>
        <h2>Software Developer</h2>
      </div>
      {/* Links */}
      <div className="personal-data-links">
        {personalData.map((el) => (
          <PersonalInfo key={el.type} type={el.type} data={el.data} />
        ))}
      </div>
    </header>
  );
};
