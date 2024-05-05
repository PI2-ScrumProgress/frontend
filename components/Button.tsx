interface Button {
  title: string;
  onClick?: () => void;
}

interface ButtonProps {}

const Button = ({ title, onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-base w-[150px] h-[40px] hover:cursor-pointer hover:bg-black1"
    >
      {title}
    </button>
  );
};

export { Button };
