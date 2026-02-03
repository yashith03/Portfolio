import portfolioData from '../data/portfolio.json';
import { PortfolioData } from '../types/portfolio';

export function usePortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}
