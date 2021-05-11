import { UserSelectBuilder as Class } from '../../src/elements/user-select';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/user-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'UserSelect';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.placeholder,
  methods.actionId,
  methods.initialUser,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
