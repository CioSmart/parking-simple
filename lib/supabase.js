import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  { db: { schema: 'parking_simple' } }

export const supabase = createClient(supabaseUrl, supabaseAnonKey)