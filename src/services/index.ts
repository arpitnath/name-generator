import { AnimationsApi, animationsService } from "./animations";

const api: AnimationsApi = {
  animations: animationsService,
};

export type Api = typeof api;

export default api;
