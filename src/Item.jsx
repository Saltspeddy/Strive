const Item = (props) => {
  let title = props.title;
  let price = props.price;
  return (
    <div className="lg:h-[350px] h-[220px] lg:w-[220px] w-[150px] grid grid-rows-5 shadow-2xl">
      <div
        className="row-span-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(` + props.src + `)`,
        }}
      ></div>
      <div className="relative flex flex-col items-center">
        <p className="md:text-base text-sm">{title}</p>
        <p className="absolute bottom-4 right-4 md:text-base text-sm">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Item;
