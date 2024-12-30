import { v4 } from "uuid";
import supabase from "../config/supabase";
import { urlId } from "../constants";

export const uploadFile = async (file) => {
  const { data, error } = await supabase.storage
    .from("products")
    .upload(`image/` + v4(), file, {
      cacheControl: "3600",
      upsert: false,
    });
  return { data, error };
};

export const imageUrl = (image) => {
  return `${urlId}/storage/v1/object/${image}`;
};
