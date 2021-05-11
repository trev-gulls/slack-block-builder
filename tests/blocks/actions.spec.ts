import { ActionsBuilder as Class } from '../../src/blocks/actions';
import { BlockSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/actions.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Actions';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.elements,
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
