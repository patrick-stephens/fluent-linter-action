import { getBorderCharacters } from 'table';

export const SUCCESS_SYMBOL = '💫';
export const SHRUG_SYMBOL = '¯\\_(ツ)_/¯';
export const CALYPTIA_API_ENDPOINT = 'https://cloud-api.calyptia.com';

export const CALYPTIA_API_VALIDATION_PATH = 'v1/config_validate';

export const PROBLEM_MATCHER_FILE_LOCATION = '.github/problem-matcher.json';

export const FLUENTD_REGEX = /(?<![#][ ]*)\<[a-zA-Z-@/. \_*\{\},]{1,}\>/g
export enum AGENT_TYPE {
  FLUENT_BIT = 'fluentbit',
  FLUENT_D = 'fluentd'
}

export const NO_STYLES_IN_TABLE = {
  border: getBorderCharacters('void'),
  columnDefault: {
    paddingLeft: 0,
    paddingRight: 1,
  },
  drawHorizontalLine: (): boolean => false,
};
