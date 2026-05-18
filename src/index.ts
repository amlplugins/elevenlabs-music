/**
 * @amlplugins/elevenlabs-music
 *
 * Thin namespaced re-export of the native @elevenlabs/elevenlabs-js SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * ElevenLabs Music — text-to-music generation with vocals, instrumentation, and prompt-driven composition.
 */

import * as _sdk from "@elevenlabs/elevenlabs-js";
export * from "@elevenlabs/elevenlabs-js";
export { _sdk as sdk };
export default _sdk;
