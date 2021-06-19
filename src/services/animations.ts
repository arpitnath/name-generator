function toggleRotation(isRotating: boolean): boolean {
  return !isRotating;
}

export const animationsService = {
  toggleRotation,
};

export interface AnimationsApi {
  animations: typeof animationsService;
}
