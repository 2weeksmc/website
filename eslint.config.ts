import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
// @ts-ignore
import pluginCypress from 'eslint-plugin-cypress/flat'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

const config: ReturnType<typeof defineConfigWithVueTs> = defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    rules: {
      '@typescript-eslint/no-empty-object-type': ['error', { allowObjectTypes: true }],
    },
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginCypress.configs.recommended,
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
  },

  ...pluginOxlint.configs['flat/recommended'],
  skipFormatting,
)

export default config
