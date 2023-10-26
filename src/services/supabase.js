import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qcjkfgriuhscqlxvefbo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjamtmZ3JpdWhzY3FseHZlZmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4OTEwODcsImV4cCI6MjAxMTQ2NzA4N30.NVnWPeIa7Dgx4PFaQEIISN9OpC7eFyulTJ334tWlcmQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
