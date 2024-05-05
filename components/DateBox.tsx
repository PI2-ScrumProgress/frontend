interface DateBox {
  title: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateBox = ({ title, value, onChange }: DateBox) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="font-semibold">{title}</span>
      <input
        type="date"
        name="due-date"
        id="due-date"
        value={value}
        onChange={onChange}
        className="flex px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export { DateBox };
