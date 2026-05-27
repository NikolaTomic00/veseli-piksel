export const BASIC_OPENAI_IMAGE_MODEL = "gpt-image-1";
export const ADVANCED_OPENAI_IMAGE_MODEL = "gpt-image-1.5";

export const openAiImageModels = [
  BASIC_OPENAI_IMAGE_MODEL,
  ADVANCED_OPENAI_IMAGE_MODEL,
] as const;

export type OpenAiImageModel = (typeof openAiImageModels)[number];

export const openAiImageModelLabels: Record<OpenAiImageModel, string> = {
  [BASIC_OPENAI_IMAGE_MODEL]: "Osnovni model",
  [ADVANCED_OPENAI_IMAGE_MODEL]: "Napredni model",
};

export function isOpenAiImageModel(model: string): model is OpenAiImageModel {
  return openAiImageModels.includes(model as OpenAiImageModel);
}

export function isSubscriptionOpenAiImageModel(model: string) {
  return model === ADVANCED_OPENAI_IMAGE_MODEL;
}

export function getAvailableOpenAiImageModels(
  hasSubscriptionPlan: boolean,
): readonly OpenAiImageModel[] {
  return hasSubscriptionPlan ? openAiImageModels : [BASIC_OPENAI_IMAGE_MODEL];
}
