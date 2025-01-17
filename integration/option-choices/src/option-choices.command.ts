import { Command, CommandRunner, Option, OptionChoiceFor } from 'nest-commander';

import { LogService } from '../../common/log.service';
import { ChoicesProvider } from './choices-provider.service';

@Command({ name: 'options-test', options: { isDefault: true } })
export class OptionsTestCommand implements CommandRunner {
  constructor(
    private readonly logger: LogService,
    private readonly choiceProvider: ChoicesProvider,
  ) {}
  async run(_args: never[], options: { choice: string }) {
    this.logger.log(options);
  }

  @Option({
    name: 'choices',
    choices: true,
    description: 'The choices you can make for this. "yes" or "no"',
    flags: '-c, --choice [choices]',
  })
  parseChoices(chosen: 'yes' | 'no') {
    return chosen;
  }

  @OptionChoiceFor({ name: 'choices' })
  chosenForChoices() {
    return this.choiceProvider.getChoicesForChoicesOption();
  }
}
