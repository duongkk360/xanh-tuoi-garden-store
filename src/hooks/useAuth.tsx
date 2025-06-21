
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Account } from '@/types/supabase';

interface AuthContextType {
  user: Account | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthProvider initializing...');

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        console.log('Found saved user:', parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
      }
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session);

      if (event === 'SIGNED_OUT' || !session) {
        console.log('User signed out, clearing state');
        setUser(null);
        localStorage.removeItem('user');
      }

      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
      }

      if (!session) {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('Attempting login for:', email);

      const { data, error } = await supabase
        .from('accounts')
        .select('*')
        .eq('email', email)
        .single();

      if (error) {
        console.error('Login error:', error);
        return false;
      }

      if (!data) {
        console.error('No user found with email:', email);
        return false;
      }

      console.log('User found:', data);

      // WARNING: Password not validated in this demo
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      console.log('Login successful, user set:', data);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    console.log('Logging out user');
    supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAdmin = () => {
    const result = user?.role === 0;
    console.log('Checking if admin:', user?.role, 'Result:', result);
    return result;
  };

  console.log('AuthProvider rendering, user:', user, 'loading:', loading);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
