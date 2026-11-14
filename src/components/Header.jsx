export const Header = ({ employee, bonus, up }) => {
  return <header className="bg-green-900 p-4 lg:p-8 flex flex-col lg:gap-3 rounded-lg">
      <h1 className="text-xl lg:text-3xl font-medium ">Учет сотрудников компании №</h1>
      <h2 className="text-lg lg:text-2xl">Общее число сотрудников: {employee}</h2>
      <h2 className="text-lg lg:text-2xl">Идут на повышение: {up}</h2>
      <h2 className="text-lg lg:text-2xl">Премию получат: {bonus}</h2>
  </header>
};