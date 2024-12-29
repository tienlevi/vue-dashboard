import supabase from "../config/supabase";

export const getProducts = async () => {
  try {
    const response = await supabase.from("products").select();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (data) => {
  try {
    const response = await supabase.from("products").insert(data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (id, data) => {
  try {
    const response = await supabase.from("products").update(data).eq("id", id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await supabase.from("products").delete().eq("id", id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
