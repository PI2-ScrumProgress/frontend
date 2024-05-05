interface Description {
  title: string;
  text: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Description = ({ title, text, value, onChange }: Description) => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <label htmlFor={title} className="font-semibold">
        {title}
      </label>
      <textarea
        name="description"
        id={title}
        placeholder={text}
        value={value}
        onChange={onChange}
        className="w-[700px] h-[100px] p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        style={{ resize: "none" }}
      />
    </div>
  );
};

export { Description };
