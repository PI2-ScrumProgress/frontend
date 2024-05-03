interface TextBox {
  title: string;
  text: string;
}

const TextBox = ({ title, text }: TextBox) => {
  return (
    <div className="flex items-center gap-10 p-2">
      <span className="font-semibold">{title}</span>
      <input
        type="string"
        name="info"
        id={title}
        placeholder={text}
        className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export { TextBox };
