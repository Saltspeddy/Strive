import Head from "./Head";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-9xl  font-caprasimo">Strive</h1>
        <p className="text-2xl">your go to website for clothing</p>
      </div>
      <div className="absolute top-0 left-0 h-screen w-screen grid grid-cols-3 grid-rows-3 -z-10">
        <div
          className="row-span-2 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1646837651873-bd4414977e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=732&q=80)`,
          }}
        ></div>
        <div
          className="col-span-2 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          }}
        ></div>
        <div
          className=" bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1629426958003-35a5583b2977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          }}
        ></div>
        <div
          className="row-span-2 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)`,
          }}
        ></div>
        <div
          className="col-span-2 bg-left bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          }}
        ></div>
        <div className="absolute top-0 left-0 h-screen w-screen bg-white z-10 opacity-30"></div>
      </div>
    </>
  );
};

export default Home;
