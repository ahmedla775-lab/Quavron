import { createClient }
from "@supabase/supabase-js";

const supabaseUrl =
"https://bxjsfbexfjvqjiaqtmbm.supabase.co";

const supabaseKey =
"ضع_هنا_مفتاح_ANON_PUBLIC";

export const supabase =
createClient(
  supabaseUrl,
  supabaseKey
);
