import { StaticMultiSelectBuilder as Class } from '../../src/elements/static-multi-select';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/static-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'StaticMultiSelect';
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
  methods.options,
  methods.optionGroups,
  methods.initialOptions,
  methods.confirm,
  methods.maxSelectedItems,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
