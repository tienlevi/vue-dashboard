import { createClient } from "@supabase/supabase-js";
import { apiKey, urlId } from "../constants";

const supabase = createClient(urlId, apiKey);

export default supabase;
