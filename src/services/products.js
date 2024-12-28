import supabase from "../config/supabase";

export const getProducts = async () => {
  try {
    const response = await supabase.from("products").select();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
