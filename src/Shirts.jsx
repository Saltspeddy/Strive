import Head from "./Head";
import Item from "./Item";
const Shirts = () => {
  return (
    <>
      <Head
        title="Shirts"
        src="https://images.unsplash.com/photo-1629426958003-35a5583b2977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="w-screen min-h-[50vh] flex justify-center items-center">
        <div className="md:w-[80vw] w-[95vw] py-16 grid gap-5 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 content-center justify-items-center">
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/57b1848b-d4b1-43f7-bef5-6244f1dd11f2/DreamShaper_v5_generate_a_plaid_shirt_on_a_white_background_re_0.jpg"
            title="Orange blue and white plaid shirt"
            price="30€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/57b1848b-d4b1-43f7-bef5-6244f1dd11f2/DreamShaper_v5_generate_a_plaid_shirt_on_a_white_background_re_1.jpg"
            title="Blue and brown plaid shirt"
            price="30€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/c8c4f057-f96d-4789-8608-00f03bdd2c41/DreamShaper_v5_generate_a_vertical_striped_buttoned_shirt_on_a_2.jpg"
            title="White with blue stripes shirt"
            price="25€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/05708b7a-f4a6-4448-9d7e-1b2f37d0fc2c/generations/c8c4f057-f96d-4789-8608-00f03bdd2c41/DreamShaper_v5_generate_a_vertical_striped_buttoned_shirt_on_a_0.jpg"
            title="White with gray stripes T-shirts"
            price="25€"
          />
        </div>
      </div>
    </>
  );
};

export default Shirts;
