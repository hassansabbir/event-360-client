import bannerImg from "../../assets/bannerImg.png";

const Banner = () => {
  const bgImg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backGroundPosition: "center",
  };

  return (
    <div>
      <div
        style={bgImg}
        className="font-semibold text-white w-[736px] h-[708px] flex items-end"
      >
        <div className="bg-gradient-to-t from-black pt-40 px-10 pb-10">
          <h1 className="text-5xl mt-auto">New Packages For Winter</h1>
          <p className="text-lg">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
