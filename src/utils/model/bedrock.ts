// Bedrock support has been removed
// These exports are stubs to maintain compatibility with existing code
// that may import from this module

export async function createBedrockRuntimeClient() {
  throw new Error('Bedrock is no longer supported')
}

export async function getInferenceProfileBackingModel(_profileId: string) {
  return null
}

export function isFoundationModel(_modelId: string): boolean {
  return false
}

export function extractModelIdFromArn(modelId: string): string {
  return modelId
}

export type BedrockRegionPrefix = 'us' | 'eu' | 'apac' | 'global'

export function getBedrockRegionPrefix(_modelId: string): BedrockRegionPrefix | undefined {
  return undefined
}

export function applyBedrockRegionPrefix(
  modelId: string,
  _prefix: BedrockRegionPrefix,
): string {
  return modelId
}

export function findFirstMatch(_profiles: string[], _substring: string): string | null {
  return null
}

export async function getBedrockInferenceProfiles(): Promise<string[]> {
  return []
}
