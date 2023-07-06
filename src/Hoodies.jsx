import Head from "./Head";
import Item from "./Item";
const Hoodies = () => {
  return (
    <>
      <Head
        title="Hoodies"
        src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="w-screen min-h-[50vh] flex justify-center items-center">
        <div className="md:w-[80vw] w-[95vw] py-16 grid gap-5 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 content-center justify-items-center">
          <Item
            src="https://cdn.leonardo.ai/users/65148fd6-252c-4cce-bdf4-dfd705c9256c/generations/4da08a3a-1249-4ba4-90fb-23316afdc52c/DreamShaper_v5_generate_a_black_hoodie_from_the_front_on_a_whi_1.jpg"
            title="Black hoodie"
            price="40€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/65148fd6-252c-4cce-bdf4-dfd705c9256c/generations/1d908e4c-d15e-443b-9465-004f50cccf3a/DreamShaper_v5_generate_a_yellow_hoodie_on_a_white_background_0.jpg"
            title="Yellow hoodie"
            price="40€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/65148fd6-252c-4cce-bdf4-dfd705c9256c/generations/fbea7cc2-425b-410d-9366-2772de6787f2/DreamShaper_v5_generate_a_white_hoodie_with_a_pattern_on_a_whi_3.jpg?w=512"
            title="White hoodie with pattern"
            price="50€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/65148fd6-252c-4cce-bdf4-dfd705c9256c/generations/7e10ce04-6b4a-44d5-902d-2fb74e5c5d9f/DreamShaper_v5_generate_a_dark_green_hoodie_with_a_pattern_on_0.jpg"
            title="Patterned dark green hoodie"
            price="55€"
          />
          <Item
            src="https://cdn.leonardo.ai/users/65148fd6-252c-4cce-bdf4-dfd705c9256c/generations/075ed925-b6b7-4e87-a40e-911afd67f959/DreamShaper_v5_generate_a_gray_hoodie_with_a_zipper_on_a_white_1.jpg"
            title="Gray hoodie with zipper"
            price="50€"
          />
        </div>
      </div>
    </>
  );
};

export default Hoodies;
