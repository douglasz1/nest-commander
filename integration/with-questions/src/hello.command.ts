import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { HelloOptions } from './hello.interface';

@Command({ name: 'hello', options: { isDefault: true } })
export class HelloCommand implements CommandRunner {
  constructor(private readonly inquirer: InquirerService) {}

  async run(_inputs: string[], options?: HelloOptions): Promise<void> {
    options = await this.inquirer.ask('hello', options);
    this.sayHello(options);
  }

  @Option({
    flags: '-n --username [username]',
  })
  parseName(val: string) {
    return val;
  }

  sayHello(options: HelloOptions): void {
    console.log(`Hello ${options.username}`);
  }
}