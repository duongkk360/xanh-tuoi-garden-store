
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface CareGuide {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  created_at: string;
  featured: boolean;
}

export const useCareGuides = () => {
  return useQuery({
    queryKey: ['care-guides'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('care_guides')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching care guides:', error);
        throw error;
      }
      
      return data as CareGuide[];
    },
  });
};

export const useCareGuideBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['care-guide', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('care_guides')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('Error fetching care guide:', error);
        throw error;
      }
      
      return data as CareGuide;
    },
    enabled: !!slug,
  });
};

export const useFeaturedCareGuides = () => {
  return useQuery({
    queryKey: ['featured-care-guides'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('care_guides')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching featured care guides:', error);
        throw error;
      }
      
      return data as CareGuide[];
    },
  });
};

export const useCareGuidesByCategory = (category: string) => {
  return useQuery({
    queryKey: ['care-guides-by-category', category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('care_guides')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching care guides by category:', error);
        throw error;
      }
      
      return data as CareGuide[];
    },
    enabled: !!category,
  });
};

export const useRelatedCareGuides = (currentId: number, category: string, limit = 3) => {
  return useQuery({
    queryKey: ['related-care-guides', currentId, category, limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('care_guides')
        .select('*')
        .eq('category', category)
        .neq('id', currentId)
        .limit(limit)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching related care guides:', error);
        throw error;
      }
      
      return data as CareGuide[];
    },
    enabled: !!currentId && !!category,
  });
};
