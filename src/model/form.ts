import { IsDefined } from 'class-validator';

export class Form {
  @IsDefined()
  title: string;
  @IsDefined()
  text: string;
}
