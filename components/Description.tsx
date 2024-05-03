interface Description {
  title: string;
  text: string;
}

const Description = ({ title, text }: Description) => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <label htmlFor={title} className="font-semibold">
        {title}
      </label>
      <textarea
        name="description"
        id={title}
        placeholder={text}
        className="w-[700px] h-[100px] p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        style={{ resize: "none" }}
      />
    </div>
  );
};

export { Description };
