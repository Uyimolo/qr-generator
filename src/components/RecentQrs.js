const RecentQrs = () => {
  const paragraphClass = "text-sm font-normal text-gray-700";
  const recentContainerClass =
    "flex flex-col space-y-2 px-3 py-4 border border-gray-300 bg-white mx-auto rounded-md text-left cursor-pointer md:mx-0 hover:bg-secondary shadow-xl hover:text-white xl:px-4 xl:py-6";
  return (
    <div className="flex flex-col space-y-7">
      <h2 className="text-2xl font-bold text-center text-teal lg:text-3xl xl:text-4xl">
        Your recent QR codes
      </h2>
      <div className="flex flex-wrap gap-x-3 gap-y-3">
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
      </div>
    </div>
  );
};

export default RecentQrs;
