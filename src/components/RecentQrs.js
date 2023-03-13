import { Link } from "react-router-dom";
const RecentQrs = () => {
  const paragraphClass = "text-sm font-normal md:w-1/5 md:truncate";
  const paragraphClassExeption = "text-sm font-normal md:w-2/5 md:truncate"
  const recentContainerClass =
    "flex flex-col space-y-1 py-1 px-2 border-b border-gray-200 text-gray-500 text-left cursor-pointer hover:bg-teal hover:text-white xl:p-4";
  return (
    <div className="flex flex-col rounded-md py-4 bg-recentQRImage">
      <h2 className="text-2xl font-bold text-center bg-darkGreen py-3 text-gray-200 md:bg-transparent md:text-gray-700 lg:text-3xl xl:text-4xl ">
        Your recent QR codes
      </h2>
      <div className="flex flex-col justify-center bg-gray-100 border w-full max-w-sm md:max-w-lg mx-auto md:hidden">
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: www.everybody'sfancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: www.yourfancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: My-first-picture.jpg</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: File</p>
        </div>
        <div className={recentContainerClass}>
          <p className={paragraphClass}>Name: fancyurl.com</p>
          <p className={paragraphClass}>Date: 9-3-2023</p>
          <p className={paragraphClass}>Clicks: 122</p>
          <p className={paragraphClass}>Type: URL</p>
        </div>
      </div>
      <div className="hidden flex-col gap-x-2 w-full max-w-7xl bg-gray-100 mx-auto md:flex">
        <div className="flex gap-y-4 px-4 gap-x-2 justify-between w-full bg-darkGreen text-gray-200 py-4">
          <p className="w-2/5">Name</p>
          <p className="w-1/5">Date</p>
          <p className="w-1/5">Clicks</p>
          <p className="w-1/5">Type</p>
        </div>
        <div className="flex gap-y-4 px-4 gap-x-2 justify-between w-full border-b py-4 hover:bg-teal hover:text-white">
        <p className={paragraphClassExeption}>fancyurl.comggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
          <p className={paragraphClass}>9-3-2023</p>
          <p className={paragraphClass}>122</p>
          <p className={paragraphClass}>URL</p>
        </div>
        <div className="flex gap-y-4 gap-x-2 px-4 justify-between w-full border-b py-4 hover:bg-teal hover:text-white">
        <p className={paragraphClassExeption}>fancyurl.com</p>
          <p className={paragraphClass}>9-3-2023</p>
          <p className={paragraphClass}>122</p>
          <p className={paragraphClass}>URL</p>
        </div>
        <div className="flex gap-y-4 gap-x-2 px-4 justify-between w-full border-b py-4 hover:bg-teal hover:text-white">
        <p className={paragraphClassExeption}>fancyurl.comggggggggggggggggggggggggggggggggggggggggggg</p>
          <p className={paragraphClass}>9-3-2023</p>
          <p className={paragraphClass}>122</p>
          <p className={paragraphClass}>URL</p>
        </div>
        <div className="flex gap-y-4 gap-x-2 px-4 justify-between w-full border-b-2 py-4 hover:bg-teal hover:text-white">
        <p className={paragraphClassExeption}>fancyurl.comgggggggggggggggg</p>
          <p className={paragraphClass}>9-3-2023</p>
          <p className={paragraphClass}>122</p>
          <p className={paragraphClass}>URL</p>
        </div>
        
      </div>
      <Link to="myqrs" className="w-fit mx-auto text-gray-700 font-semibold">
        See more of your QR codes
      </Link>
    </div>
  );
};

export default RecentQrs;
