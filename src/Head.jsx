const Head = (props) => {
  return (
    <>
      <div className="absolute w-screen h-[50vh] top-0 left-0 bg-gradient-to-b from-transparent z-10 to-black opacity-50"></div>

      <div
        className="relative w-screen h-[50vh] bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: `url(` + props.src + `)`,
        }}
      >
        {" "}
        <div className="absolute bottom-5 left-5 text-white text-7xl font-caprasimo z-20">
          {props.title}
        </div>
      </div>
    </>
  );
};

export default Head;
