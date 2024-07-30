import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bgplpxxzzhrpcksoblnq.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJncGxweHh6emhycGNrc29ibG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMDc3NTIsImV4cCI6MjAzNzg4Mzc1Mn0.TbLsUXYroyMsFXJaldVOgyugsqp89OJq5aLbdlA1tNk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});