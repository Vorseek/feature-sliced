import { instanceRick, instancePlaceholder } from 'shared/api/Instance';

const baseUrlRick = '/character';
const baseUrlPlaceholder = '/posts';
export const getRickAndMortyCharter = () => instanceRick.get(baseUrlRick);
export const getJSONPlaceholderPost = (currentPage: number) =>
  instancePlaceholder.get(`${baseUrlPlaceholder}/${currentPage}/comments`);
