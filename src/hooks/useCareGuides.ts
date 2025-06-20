
import { useQuery } from '@tanstack/react-query';
import { sampleCareGuides } from '@/data/sampleCareGuides';

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
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return sampleCareGuides as CareGuide[];
    },
  });
};

export const useCareGuideBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['care-guide', slug],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const guide = sampleCareGuides.find(guide => guide.slug === slug);
      if (!guide) {
        throw new Error('Care guide not found');
      }
      return guide as CareGuide;
    },
    enabled: !!slug,
  });
};

export const useFeaturedCareGuides = () => {
  return useQuery({
    queryKey: ['featured-care-guides'],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 400));
      return sampleCareGuides.filter(guide => guide.featured) as CareGuide[];
    },
  });
};

export const useCareGuidesByCategory = (category: string) => {
  return useQuery({
    queryKey: ['care-guides-by-category', category],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 400));
      return sampleCareGuides.filter(guide => guide.category === category) as CareGuide[];
    },
    enabled: !!category,
  });
};

export const useRelatedCareGuides = (currentId: number, category: string, limit = 3) => {
  return useQuery({
    queryKey: ['related-care-guides', currentId, category, limit],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return sampleCareGuides
        .filter(guide => guide.category === category && guide.id !== currentId)
        .slice(0, limit) as CareGuide[];
    },
    enabled: !!currentId && !!category,
  });
};
