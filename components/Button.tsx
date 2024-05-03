interface Button {
  title: string;
}

interface ButtonProps {}

const Button = ({ title }: Button) => {
  return (
    <button className="bg-green-base w-[150px] h-[40px] hover:cursor-pointer hover:bg-black1">
      {title}
    </button>
  );
};

export { Button };
