import { httpApi } from '@/shared/composable/httpApi';
import { AxiosResponse } from 'axios';

export type Counter = {
  counterId: number;
  userId: number;
};
export function apiSpaAnalytics(): Promise<AxiosResponse<T>> {
  return httpApi.get<Counter>('rest/user/counter/');
}
