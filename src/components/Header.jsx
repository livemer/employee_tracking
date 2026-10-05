

export const Header = ({ employee, bonus }) => {
  return <header className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
      <h1 className="font-medium text-3xl">Учет сотрудников компании №</h1>
      <h2 className="text-2xl">Общее число сотрудников: {employee}</h2>
      <h2 className="text-2xl">Премию получат: {bonus}</h2>
  </header>
};