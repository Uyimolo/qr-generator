const RecentQRDesktop = ({ recentArr }) => {
  const paragraphClassExeption = "text-sm font-normal md:w-2/5 md:truncate";
  const paragraphClass = "text-sm font-normal md:w-1/5 md:truncate";
  return (
    <div className="hidden flex-col gap-x-2 w-full max-w-7xl bg-gray-100 mx-auto md:flex">
      <div className="flex gap-y-4 px-4 gap-x-2 justify-between w-full bg-darkGreen text-gray-200 py-4">
        <p className="w-2/5">Name</p>
        <p className="w-1/5">Date</p>
        <p className="w-1/5">Clicks</p>
        <p className="w-1/5">Type</p>
      </div>
      {recentArr.map((recentQR) => (
        <div
          className="flex gap-y-4 px-4 gap-x-2 justify-between w-full border-b py-4 hover:bg-teal hover:text-white"
          key={recentQR}
        >
          <p className={paragraphClassExeption}>
            fancyurl.comggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
          </p>
          <p className={paragraphClass}>9-3-2023</p>
          <p className={paragraphClass}>122</p>
          <p className={paragraphClass}>URL</p>
        </div>
      ))}
    </div>
  );
};
export default RecentQRDesktop;
