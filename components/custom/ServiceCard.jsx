const ServiceCard = ({ id, text, bgc, bgs }) => {
  return (
    <div>
      <div
        className={`p-4 flex flex-col gap-4 rounded-xl shadow-md max-w-sm mx-auto h-full`}
        style={{ backgroundColor: `${bgc}` }}
      >
        <div
          className="w-[70px] min-h-[70px] max-h-[70px] rounded-full flexCenter text-4xl text-white font-extrabold flex-1"
          style={{ backgroundColor: `${bgs}` }}
        >
          {id}
        </div>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
