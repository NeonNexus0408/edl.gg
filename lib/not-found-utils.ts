import { notFound } from "next/navigation"

/**
 * Utility function to check if a resource exists and throw a 404 if not
 * @param exists Boolean indicating if the resource exists
 * @param message Optional custom message for logging
 */
export function checkResourceExists(exists: boolean, message?: string): void {
  if (!exists) {
    console.log(`Resource not found: ${message || "Unknown resource"}`)
    notFound()
  }
}

/**
 * Utility function to validate a dynamic parameter
 * @param param The parameter to validate
 * @param validator Optional validation function
 */
export function validateParam(param: string | string[] | undefined, validator?: (param: string) => boolean): string {
  if (!param) {
    notFound()
  }

  const paramValue = Array.isArray(param) ? param[0] : param

  if (validator && !validator(paramValue)) {
    notFound()
  }

  return paramValue
}

