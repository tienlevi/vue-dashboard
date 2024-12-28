import { createClient } from "@supabase/supabase-js";
import { apiKey, urlEndpoint } from "../constants";

const supabase = createClient(urlEndpoint, apiKey);

export default supabase;
