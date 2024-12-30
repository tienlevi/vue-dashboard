import supabase from "../config/supabase";

export const getCategories = async () => {
  try {
    const response = await supabase.from("categories").select();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await supabase
      .from("categories")
      .select()
      .eq("id", id)
      .single();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (data) => {
  try {
    const response = await supabase.from("categories").insert(data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (id, data) => {
  try {
    const response = await supabase
      .from("categories")
      .update(data)
      .eq("id", id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await supabase.from("categories").delete().eq("id", id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
