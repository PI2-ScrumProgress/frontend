interface DateBox {
  title: string;
}

const DateBox = ({ title }: DateBox) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="font-semibold">{title}</span>
      <input
        type="date"
        name="due-date"
        id="due-date"
        className="flex px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export { DateBox };
