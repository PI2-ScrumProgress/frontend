interface DropDownBox {
  title: string;
}

const DropDownBox = ({ title }: DropDownBox) => {
  return (
    <div className="sm:col-span-3 flex items-center gap-x-5">
      <span className="font-semibold">{title}</span>
      <div className="mt-2">
        <select
          id="priority"
          name="priority"
          autoComplete="priority-level"
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>
      </div>
    </div>
  );
};

export { DropDownBox };
