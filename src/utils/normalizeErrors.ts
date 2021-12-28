import { join } from 'path';
import { AGENT_TYPE } from './constants';

export type FieldErrors = Record<string, Record<string, string[]>>;
type ErrorGroup = [group: string, reasons: string[]];
export type Annotation = { filePath: string; errorGroups: ErrorGroup[]; section: string };

declare let process: {
  env: {
    GITHUB_WORKSPACE: string;
  };
};

function relativeFilePath(filePath: string): string {
  return filePath.replace(join(process.env.GITHUB_WORKSPACE, '/'), '');
}


export function normalizeErrors(filePath: string, agentType: AGENT_TYPE, { runtime, ...errors }: FieldErrors): Annotation[] {

  if (agentType === AGENT_TYPE.FLUENT_BIT) {
    const annotations = Object.entries(errors).reduce((memo, [command, issues]) => {
      if (Object.keys(issues).length) {
        const errorGroups = Object.entries(issues);

        return [...memo, { filePath: relativeFilePath(filePath), section: command, errorGroups }];
      }

      return memo;
    }, [] as Annotation[]);

    return annotations;
  }


  return runtime.filter(Boolean);
}
