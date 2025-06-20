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

const enhanceContentWithImages = (content: string, category: string): string => {
  let enhancedContent = content;
  
  const categoryImages = {
    light: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?w=800&h=400&fit=crop',
    watering: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop',
    soil: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=400&fit=crop',
    fertilizer: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=800&h=400&fit=crop',
    pests: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop',
    basics: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=400&fit=crop'
  };

  const mainImage = categoryImages[category as keyof typeof categoryImages] || categoryImages.basics;
  
  const firstParagraphEnd = enhancedContent.indexOf('</p>');
  if (firstParagraphEnd !== -1) {
    const imageHtml = `
      <img src="${mainImage}" alt="Cây mini bonsai" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin: 20px 0;" />
    `;
    enhancedContent = enhancedContent.slice(0, firstParagraphEnd + 4) + imageHtml + enhancedContent.slice(firstParagraphEnd + 4);
  }

  const additionalImages = [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=800&h=300&fit=crop'
  ];

  const h3Pattern = /<h3[^>]*>.*?<\/h3>/g;
  let h3Matches = enhancedContent.match(h3Pattern);
  
  if (h3Matches && h3Matches.length > 1) {
    const secondH3Index = enhancedContent.indexOf(h3Matches[1]) + h3Matches[1].length;
    const imageHtml1 = `
      <img src="${additionalImages[0]}" alt="Sen đá mini" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin: 15px 0;" />
    `;
    enhancedContent = enhancedContent.slice(0, secondH3Index) + imageHtml1 + enhancedContent.slice(secondH3Index);
  }

  if (h3Matches && h3Matches.length > 3) {
    const updatedContent = enhancedContent;
    const updatedH3Matches = updatedContent.match(h3Pattern);
    if (updatedH3Matches && updatedH3Matches[3]) {
      const fourthH3Index = updatedContent.indexOf(updatedH3Matches[3]) + updatedH3Matches[3].length;
      const imageHtml2 = `
        <img src="${additionalImages[1]}" alt="Xương rồng mini" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin: 15px 0;" />
      `;
      enhancedContent = updatedContent.slice(0, fourthH3Index) + imageHtml2 + updatedContent.slice(fourthH3Index);
    }
  }

  const lastParagraphIndex = enhancedContent.lastIndexOf('</p>');
  if (lastParagraphIndex !== -1) {
    const finalImageHtml = `
      <img src="${additionalImages[3]}" alt="Bonsai mini khỏe mạnh" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin: 15px 0;" />
    `;
    enhancedContent = enhancedContent.slice(0, lastParagraphIndex) + finalImageHtml + enhancedContent.slice(lastParagraphIndex);
  }

  return enhancedContent;
};

export const useCareGuides = () => {
  return useQuery({
    queryKey: ['care-guides'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('care_guides')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      return data?.map(guide => ({
        ...guide,
        content: enhanceContentWithImages(guide.content, guide.category)
      })) as CareGuide[];
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
      
      if (error) throw error;
      if (!data) throw new Error('Care guide not found');
      
      return {
        ...data,
        content: enhanceContentWithImages(data.content, data.category)
      } as CareGuide;
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
      
      if (error) throw error;
      
      return data?.map(guide => ({
        ...guide,
        content: enhanceContentWithImages(guide.content, guide.category)
      })) as CareGuide[];
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
      
      if (error) throw error;
      
      return data?.map(guide => ({
        ...guide,
        content: enhanceContentWithImages(guide.content, guide.category)
      })) as CareGuide[];
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
        .order('created_at', { ascending: false })
        .limit(limit);
      
      if (error) throw error;
      
      return data?.map(guide => ({
        ...guide,
        content: enhanceContentWithImages(guide.content, guide.category)
      })) as CareGuide[];
    },
    enabled: !!currentId && !!category,
  });
};
