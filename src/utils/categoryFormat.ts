

export function getCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    development: '개발',
    algorithm: '알고리즘',
    cs: 'CS',
  };

  return categoryMap[category] || category;
}