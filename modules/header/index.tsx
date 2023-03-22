import { useMouseVariant, MouseVariant } from '@/modules/customMouse';

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden p-7">
      <div>
        <p className="mb-5 text-lg text-zinc-500 sm:text-xl">
         Koakoalla - Frontend-developer
        </p>
        <h1
          className="text-5xl sm:text-extra"
          onMouseEnter={() => setMouseVariant(MouseVariant.TEXT)}
          onMouseLeave={() => setMouseVariant(MouseVariant.DEFAULT)}
        >
          Фокус на создании  <br />
          отличных <span className="text-violet-600">веб-сервисов</span> для людей.
        </h1>

        <p className="mt-10 text-lg text-zinc-500 sm:text-xl">
          Меня зовут Ирина, я Next.js разработчица с опытом работы больше 2х лет<br />
         разработки веб-приложений.
        </p>
      </div>
    </div>
  );
};

export default Header;
