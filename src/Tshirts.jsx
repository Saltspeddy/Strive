import Head from "./Head";
import Item from "./Item";

const Tshirts = () => {
  return (
    <>
      <Head
        title="T-shirts"
        src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="w-screen min-h-[50vh] flex justify-center items-center">
        <div className="md:w-[80vw] w-[95vw] py-16 grid gap-5 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 content-center justify-items-center">
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/f8877f1a-ec80-404e-b2f2-1f6f8600da49/DreamShaper_v5_generate_a_red_Tshirt_on_white_background_reali_2.jpg"
            title="Red sport T-shirt"
            price="25€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/97df21ca-3f8c-45d4-ba4c-3b8cec0c30c1/DreamShaper_v5_generate_a_blue_Tshirt_on_white_background_real_1.jpg"
            title="Blue sport T-shirt"
            price="25€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/bc6389ed-a5c9-42e9-8256-194305e9bbe7/DreamShaper_v5_generate_a_black_loose_Tshirt_on_white_backgrou_0.jpg"
            title="Black sport T-shirt"
            price="25€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/26d4a754-b029-413d-9670-33e952b19009/DreamShaper_v5_generate_a_baggy_Tshirt_with_the_top_half_in_ye_3.jpg"
            title="Yellow and orange sport T-shirts"
            price="25€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/f415541b-5d9b-4c64-942e-fd9b922b06c4/DreamShaper_v5_generate_a_baggy_striped_Tshirt_on_white_backgr_0.jpg"
            title="Red and white striped T-shirt"
            price="20€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/aee0d1d4-3968-433e-9f3c-70bb39b52e9d/DreamShaper_v5_generate_a_baggy_Tshirt_on_white_background_rea_1.jpg"
            title="White T-shirt"
            price="20€"
          />
        </div>
      </div>
    </>
  );
};

export default Tshirts;
